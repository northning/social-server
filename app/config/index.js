const app = {
  db: {
    host: "ds229701.mlab.com",
    port: 29701,
    name: "social-server",
    username: "admin",
    password: "nn784512"
  },
  jwt: {
    APP_SECRET: "CR7",
    EXPIRE_IN: "7d"
  }
};

export const database = app.db;
export default app;
