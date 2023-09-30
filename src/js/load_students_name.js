const Submit_btn = document.querySelector("#submit-btn");
const student_info_container = document.querySelector(".descriptions");

let students_name = new Array (
    "ចេង  ហេងឆាយ",
    "តាំង  កុកស៊្រុន",
    "ទេព  ជូឡុង",
    "សេង  រ៉ូហ្សា",
    "សែម  វីរៈ"
);

Load_Students_List(students_name);

function Load_Students_List(name_list) {

    let context = "";

    name_list.forEach(elements => {
        
        context = `<div class="student-info">
                                <h3 id="name">${elements}</h3>
                                <div>
                                    <label>Attend</label>
                                    <input type="checkbox" class="attendent-checkbox" onclick="Attendent(this);">
                                    <label>Absent</label>
                                    <input type="checkbox" class="attendent-checkbox" onclick="Attendent(this);">
                                </div>
                            </div>`;

        student_info_container.insertAdjacentHTML("beforebegin", context);
    })

}