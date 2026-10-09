const profile = {
    name: "Amanda Putri",
    role: "peserta bootcamp",
    favoriteTech: ["Next.js", "Tailwind CSS"],
};

export async function GET() {
    return Response.json(profile);
}
