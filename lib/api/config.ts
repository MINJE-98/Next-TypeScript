const SERVER_URL = !process.env.NEXT_PUBLIC_SERVER_URL
  ? "localhost"
  : process.env.NEXT_PUBLIC_SERVER_URL;

export default SERVER_URL;
