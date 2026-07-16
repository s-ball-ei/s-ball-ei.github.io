const contents = ["content", "whoami", "lessons", "pricing", "FAQ"];

function set_content(id) {
    for (var div in contents) {
        let elt = document.getElementById(contents[div]);
        if (contents[div] == id) {
            // alert(div + " -> " + contents[div] + " ON");
            elt.hidden = false;
        }
        else {
            // alert(contents[div] + " OFF");
            elt.hidden = true;
        }
    } 
}