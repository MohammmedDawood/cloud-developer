export const config = {
  dev: {
    username: "udagramdawooddev",
    password: "udagramdawooddev",
    database: "udagramdawooddev",
    host: "udagramdawooddev.civ2bp0vdefo.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-2",
    aws_profile: "default",
    aws_media_bucket: "udagram-ruttner-dev",
  },
  jwt: {
    secret: " ",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
