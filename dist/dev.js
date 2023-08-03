import Config from "./Config.js";
import install from "./install.js";
Config.devMode = true;
Config.discordAuthURL = "https://discord.com/api/oauth2/authorize?client_id=1123167459415953511&redirect_uri=http%3A%2F%2Flocalhost%3A8413%2F&response_type=code&scope=identify";
Config.supabaseURL = "http://localhost:54321";
Config.supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
await install();
//# sourceMappingURL=dev.js.map