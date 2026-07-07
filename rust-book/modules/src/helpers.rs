pub mod namehelpers {
pub fn get_full_name(firstname: &str, secondname: &str) -> String{
   
    let full_name = format!("{0} {1}",firstname, secondname);
    full_name
}

}

pub mod database {

}

pub mod privatefns {
    pub fn get_age_plus_5(age: u8) -> u8{
        age+5

    }
}
