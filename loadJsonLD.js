window.onload = function () {
	person = JSON.parse(document.getElementById('person-ld').text)
    document.body.appendChild(createLinkTag(person.name, person.url));
};
function createLinkTag(text, href)
{
    var a = document.createElement('a');
    a.appendChild(document.createTextNode(text));
    a.setAttribute("href", href);
    return a;
}

