function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius");
      let volume = document.getElementById("volume")
      volume.value = (4/3)*(Math.PI)*Math.pow(Number(radius.value),2);   

} 
window.onload = document.getElementById('MyForm').addEventListener('submit',(event)=>{
     event.preventDefault();
     volume_sphere();
 })

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
