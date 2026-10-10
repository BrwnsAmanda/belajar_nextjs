import {
findAllFavorites,
findFavoriteById,
insertFavorite,
updateFavoriteById,
deleteFavoriteById,
} from "@/lib/repositories/favoriteRepository";

import { validateFavoriteInput } from "@/lib/validations/favoriteValidation";

export function getAllFavorites() {
return findAllFavorites();
}

export function addFavorite(body) {
const validation = validateFavoriteInput(body);

if (!validation.valid) {
return { success: false, status: 400, error: validation.error };
}

const alreadyExists = findFavoriteById(body.id);

if (alreadyExists) {
return {
success: false,
status: 400,
error: "User ini sudah difavoritkan",
};
}

const saved = insertFavorite(body);

return { success: true, status: 201, data: saved };
}

export function updateFavorite(id, data) {
const favorite = findFavoriteById(id);

if (!favorite) {
return {
success: false,
status: 404,
error: "Data tidak ditemukan",
};
}

const updated = updateFavoriteById(id, data);

return { success: true, status: 200, data: updated };
}

export function removeFavorite(id) {
const deleted = deleteFavoriteById(id);

if (!deleted) {
return { success: false, status: 404, error: "Data tidak ditemukan" };
}

return { success: true, status: 200 };
}
