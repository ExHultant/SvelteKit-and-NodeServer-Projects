import express from "express";
import morgan from "morgan";
import { db } from "./db/index.js";
import * as schema from "./db/schema.js";
import { eq } from "drizzle-orm";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 3000;

//localhost:3000/
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

//localhost:3000/users
app.get("/users", async (req, res) => {
  const users = await db.query.users.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  let { name, email, age, lastname } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name or email are required" });
  }

  name = name.charAt(0).toUpperCase() + name.slice(1);
  lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);

  const existingUser = await db.query.users.findFirst({
    where: eq(schema.users.email, email),
  });

  if (existingUser) {
    res.status(409).json({ message: "User already exists" });
    return;
  }

  const user = await db
    .insert(schema.users)
    .values({ name, email, age, lastname })
    .returning();

  console.log("User created", user);

  res.json(user);
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await db.query.users.findFirst({
    where: eq(schema.users.id, id),
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = await db
    .delete(schema.users)
    .where(eq(schema.users.id, id))
    .returning();

  console.log("User deleted", deletedUser);

  res.json({ message: "User deleted" });
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  let { name, email, age, lastname } = req.body;

  const user = await db.query.users.findFirst({
    where: eq(schema.users.id, id),
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  name = name.charAt(0).toUpperCase() + name.slice(1);
  lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);

  const updatedUser = await db
    .update(schema.users)
    .set({ name, email, age, lastname })
    .where(eq(schema.users.id, id))
    .returning();

  console.log("User updated", updatedUser);

  res.json(updatedUser);
});

//localhost:3000/roles
app.get("/roles", async (req, res) => {
  const roles = await db.query.roles.findMany();
  res.json(roles);
});

app.post("/roles", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const existingRole = await db.query.roles.findFirst({
    where: eq(schema.roles.name, name),
  });

  if (existingRole) {
    return res.status(409).json({ message: "Role already exists" });
  }

  const uppercaseName = name.toUpperCase();

  const role = await db
    .insert(schema.roles)
    .values({ name: uppercaseName })
    .returning();

  res.json(role);
});

app.delete("/roles/:id", async (req, res) => {
  const { id } = req.params;

  const role = await db.query.roles.findFirst({
    where: eq(schema.roles.id, id),
  });

  if (!role) {
    return res.status(404).json({ message: "Role not found" });
  }

  await db.delete(schema.roles).where(eq(schema.roles.id, id));

  console.log("Role deleted", role);

  res.json({ message: "Role deleted", role });
});

app.get("/roles/:id", async (req, res) => {
  const { id } = req.params;

  const role = await db.query.roles.findFirst({
    where: eq(schema.roles.id, id),
  });

  if (!role) {
    return res.status(404).json({ message: "Role not found" });
  }

  res.json(role);
});

//localhost:3000/user_roles
app.post("/user_roles", async (req, res) => {
  const { userId, roleId } = req.body;

  if (userId === undefined || roleId === undefined) {
    return res.status(400).json({ message: "userId and roleId are required" });
  }

  const user = await db.query.users.findFirst({
    where: eq(schema.users.id, userId),
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const role = await db.query.roles.findFirst({
    where: eq(schema.roles.id, roleId),
  });

  if (!role) {
    return res.status(404).json({ message: "Role not found" });
  }

  const userRole = await db
    .insert(schema.userRoles)
    .values({ userId, roleId })
    .returning();
  res.json(userRole);
});

app.get("/users/:id/roles", async (req, res) => {
  const { id } = req.params;
  const userRoles = await db.query.userRoles.findMany({
    where: eq(schema.userRoles.userId, id),
  });
  const roles = await Promise.all(
    userRoles.map((userRole) =>
      db.query.roles.findFirst({
        where: eq(schema.roles.id, userRole.roleId),
      })
    )
  );
  res.json(roles);
});

app.delete("/user_roles/:id", async (req, res) => {
  const { id } = req.params;

  const userRole = await db.query.userRoles.findFirst({
    where: eq(schema.userRoles.id, id),
  });

  if (!userRole) {
    return res.status(404).json({ message: "User role not found" });
  }

  await db.delete(schema.userRoles).where(eq(schema.userRoles.id, id));

  console.log("User role deleted", userRole);

  res.json({ message: "User role deleted" });
});

app.put("/users/:id/roles", async (req, res) => {
  const { id } = req.params;
  const { roleIds } = req.body;

  const user = await db.query.users.findFirst({
    where: eq(schema.users.id, id),
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await db.delete(schema.userRoles).where(eq(schema.userRoles.userId, id));

  const userRoles = await Promise.all(
    roleIds.map((roleId) =>
      db.insert(schema.userRoles).values({ userId: id, roleId }).returning()
    )
  );

  console.log("User roles updated", userRoles);

  res.json(userRoles);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
