export const loginRepository = {
    getAllUsers: "SELECT * FROM tb_if_login",
    verifyLogin: "SELECT * FROM tb_if_login WHERE ds_login = $1",
    checkUser: "SELECT * FROM tb_if_login WHERE ds_login = $1",
    createUser: "INSERT INTO tb_if_login (ds_login, ds_senha) VALUES ($1, $2) RETURNING *"
}
