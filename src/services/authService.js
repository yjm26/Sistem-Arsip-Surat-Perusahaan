export async function login({ email, password }) {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    // credentials: "include", // HAPUS baris ini jika tidak pakai session/cookie
  });
  if (!res.ok) throw new Error("Login gagal");
  const user = await res.json();
  return user;
}

