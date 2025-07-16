export async function getAccounts() {
  const response = await fetch('http://localhost:5000/api/accounts');
  if (!response.ok) throw new Error('Gagal mengambil data akun');
  return response.json();
}

export async function createAccount({ id, email, password, role}) {
  const response = await fetch('http://localhost:5000/api/accounts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, email, password, role }),
  });
  if (!response.ok) throw new Error('Gagal membuat akun');
  return response.json();
}

export async function deleteAccount(id) {
  const response = await fetch(`http://localhost:5000/api/accounts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Gagal menghapus akun');
  return response.json();
}

export async function updateAccount(id, { email, password, role }) {
  const response = await fetch(`http://localhost:5000/api/accounts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, role }),
  });
  if (!response.ok) throw new Error('Gagal mengupdate akun');
  return response.json();
}