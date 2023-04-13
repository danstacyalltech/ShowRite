import NextAuth from "next-auth";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		AzureADB2CProvider({
			tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
			clientId: process.env.AZURE_AD_B2C_CLIENT_ID,
			clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,
			primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
			authorization: {
				params: {
					scope: "offline_access openid",
				},
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			// here we can add RBAC by adding custom properties to the token. We hard code the role of the user to admin for now. We do not want to have this line in poroduction.
			token.role = "admin";
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			session.accessToken = token.accessToken;
			return session;
		},
	},
};

export default NextAuth(authOptions);
