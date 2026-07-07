fn main() {
    
}

fn stringify_name_with_title( name: &Vec<String> ) -> String {
    let mut full = name.join(" ");
    full.push_str(" Esq. ");
    full
}
