/*tarea();

console.log(document.forms.formRegistrar.user.value);

document.querySelector("#formRegistrar").addEventListener("submit",function(e){
    e.preventDefault();
    let data={
        materia:document.forms.formRegistrar.materia.value,
        uv:document.forms.formRegistrar.uv.value,
        descripcion:document.forms.formRegistrar.descripcion.value
    }
    console.log(data);

    fetch('/api/Lentes de camaras', {method:"POST" ,body:JSON.stringify(data),headers: { 'Content-Type': 'application/json'}})
    .then(res=>res.json())
    .then(Response=> {
        tarea();
        catch(err => {
        console.log (err)
        }
        }
    )






})*/
