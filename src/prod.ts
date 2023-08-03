import Config from "./Config.js";
import install from "./install.js";

Config.discordAuthURL = "https://discord.com/api/oauth2/authorize?client_id=1135844231869644862&redirect_uri=https%3A%2F%2Fdiscord-asset-verification.gaia.cc%2F&response_type=code&scope=identify";
Config.supabaseURL = "https://qlusufpskzfuzakfzyuj.supabase.co";
Config.supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsdXN1ZnBza3pmdXpha2Z6eXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNTEzNDQsImV4cCI6MjAwNjYyNzM0NH0.PU-d9F-sjJ5KPcY-zl_iXaHesb00-Y5O26c9h_7mmAs";

await install();
