(()=>{const e=document.querySelector("#modal"),t=document.querySelector("#taskForm"),n=document.querySelector("#addButton"),d=document.querySelector("#closeButton"),o=document.querySelector("#hero");n.addEventListener("click",(()=>{e.show()})),d.addEventListener("click",(()=>{e.close()})),t.addEventListener("submit",(t=>{t.preventDefault(),e.close();const n=document.querySelector("#title").value,d=document.querySelector("#description").value,c=document.querySelector("#dueDate").value,r=document.createElement("div"),l=document.createElement("ul"),u=document.createElement("li"),a=document.createElement("li"),i=document.createElement("li"),m=document.createElement("button");r.classList.add("card"),u.textContent=`Task: ${n}`,a.textContent=`Description: ${d}`,i.textContent=`Due Date: ${c}`,m.textContent="Done!",m.style.cssText="background-color: #eeeeee; border: none; border-radius: 15px; padding: 3px 5px 3px 5px; width: 50%",m.addEventListener("click",(()=>{r.remove()})),l.appendChild(u),l.appendChild(a),l.appendChild(i),r.appendChild(l),r.appendChild(m),o.appendChild(r)}))})();