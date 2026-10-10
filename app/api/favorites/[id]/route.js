import { updateFavorite, removeFavorite } from "@/lib/services/favoriteService";

export async function PATCH(request, { params }) {
try {
const { id } = await params;
const body = await request.json();


if (
  !body ||
  typeof body !== "object" ||
  Array.isArray(body) ||
  typeof body.note !== "string" ||
  !body.note.trim()
) {
  return Response.json(
    { error: "Field note wajib diisi dengan teks." },
    { status: 400 }
  );
}

const result = updateFavorite(Number(id), {
  note: body.note.trim(),
});

if (!result.success) {
  return Response.json(
    { error: result.error },
    { status: result.status }
  );
}

return Response.json(result.data, { status: result.status });


} catch {
return Response.json(
{ error: "Request body harus berupa JSON yang valid." },
{ status: 400 }
);
}
}

export async function DELETE(request, { params }) {
const { id } = await params;
const result = removeFavorite(Number(id));

if (!result.success) {
return Response.json(
{ error: result.error },
{ status: result.status }
);
}

return Response.json({ message: "Berhasil dihapus" });
}
