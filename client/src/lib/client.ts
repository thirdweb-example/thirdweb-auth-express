import { createThirdwebClient } from "thirdweb";

const clientId = process.env.THIRDWEB_CLIENT_ID!;

export const client = createThirdwebClient({ clientId });
