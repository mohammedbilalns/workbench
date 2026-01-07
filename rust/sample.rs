trait UserService{
    async fn get_user(&sel, id: &str) -> Option<User>
}
