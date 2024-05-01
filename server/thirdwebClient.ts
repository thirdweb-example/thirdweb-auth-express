import { createThirdwebClient } from "thirdweb";

const secretKey = process.env.THIRDWEB_SECRET_KEY!;

export const thirdwebClient = createThirdwebClient({ secretKey });
