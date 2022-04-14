var checkAll = document.getElementById("checkAll");
checkAll && (checkAll.onclick = function() {
    for (var e = document.querySelectorAll('.form-check-all input[type="checkbox"]'), t = 0; t < e.length; t++) e[t].checked = this.checked, e[t].checked ? e[t].closest("tr").classList.add("table-active") : e[t].closest("tr").classList.remove("table-active")
});
var perPage = 8,
    options = {
        valueNames: ["id", "marca_name", "fc", "date", "phone", "status"],
        page: perPage,
        pagination: !0,
        plugins: [ListPagination({
            left: 2,
            right: 2
        })]
    },
    marcaList = new List("marcaList", options).on("updated", function(e) {
        0 == e.matchingItems.length ? document.getElementsByClassName("noresult")[0].style.display = "block" : document.getElementsByClassName("noresult")[0].style.display = "none";
        var t = 1 == e.i,
            a = e.i > e.matchingItems.length - e.page;
        document.querySelector(".pagination-prev.disabled") && document.querySelector(".pagination-prev.disabled").classList.remove("disabled"), document.querySelector(".pagination-next.disabled") && document.querySelector(".pagination-next.disabled").classList.remove("disabled"), t && document.querySelector(".pagination-prev").classList.add("disabled"), a && document.querySelector(".pagination-next").classList.add("disabled"), e.matchingItems.length <= perPage ? document.querySelector(".pagination-wrap").style.display = "none" : document.querySelector(".pagination-wrap").style.display = "flex", e.matchingItems.length == perPage && document.querySelector(".pagination.listjs-pagination").firstElementChild.children[0].click(), 0 < e.matchingItems.length ? document.getElementsByClassName("noresult")[0].style.display = "none" : document.getElementsByClassName("noresult")[0].style.display = "block"
    });
const xhttp = new XMLHttpRequest;
xhttp.onload = function() {
    JSON.parse(this.responseText).forEach(e => {
        marcaList.add({
            id: '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ' + e.id + "</a>",
            marca_name: e.marca_name,
            fc: e.fc,
            date: e.date,
            phone: e.phone,
            status: isStatus(e.status)
        }), refreshCallbacks()
    }), marcaList.remove("id", '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ2101</a>')
}, xhttp.open("GET", "{% static 'base/json/marca-list.json' %}"), xhttp.send(), isCount = (new DOMParser).parseFromString(marcaList.items.slice(-1)[0]._values.id, "text/html");
var isValue = isCount.body.firstElementChild.innerHTML,
    idField = document.getElementById("id-field"),
    marcaNameField = document.getElementById("marcaname-field"),
    fcField = document.getElementById("fc-field"),
    dateField = document.getElementById("date-field"),
    phoneField = document.getElementById("phone-field"),
    statusField = document.getElementById("status-field"),
    addBtn = document.getElementById("add-btn"),
    editBtn = document.getElementById("edit-btn"),
    removeBtns = document.getElementsByClassName("remove-item-btn"),
    editBtns = document.getElementsByClassName("edit-item-btn");

function filterContact(e) {
    var t = e;
    marcaList.filter(function(e) {
        matchData = (new DOMParser).parseFromString(e.values().status, "text/html");
        e = matchData.body.firstElementChild.innerHTML;
        return "All" == e || "All" == t || e == t
    }), marcaList.update()
}

function updateList() {
    var t = document.querySelector("input[name=status]:checked").value;
    data = userList.filter(function(e) {
        return "All" == t || e.values().sts == t
    }), userList.update()
}
refreshCallbacks(), document.getElementById("showModal").addEventListener("show.bs.modal", function(e) {
    e.relatedTarget.classList.contains("edit-item-btn") ? (document.getElementById("exampleModalLabel").innerHTML = "Edit marca", document.getElementById("showModal").querySelector(".modal-footer").style.display = "block", document.getElementById("add-btn").style.display = "none", document.getElementById("edit-btn").style.display = "block") : e.relatedTarget.classList.contains("add-btn") ? (document.getElementById("exampleModalLabel").innerHTML = "Add marca", document.getElementById("showModal").querySelector(".modal-footer").style.display = "block", document.getElementById("edit-btn").style.display = "none", document.getElementById("add-btn").style.display = "block") : (document.getElementById("exampleModalLabel").innerHTML = "List marca", document.getElementById("showModal").querySelector(".modal-footer").style.display = "none")
}), ischeckboxcheck(), document.getElementById("showModal").addEventListener("hidden.bs.modal", function() {
    clearFields()
}), document.querySelector("#marcaList").addEventListener("click", function() {
    refreshCallbacks(), ischeckboxcheck()
});
var table = document.getElementById("marcaTable"),
    tr = table.getElementsByTagName("tr"),
    trlist = table.querySelectorAll(".list tr");

function SearchData() {
    var n = document.getElementById("idStatus").value,
        i = document.getElementById("datepicker-range").value,
        s = i.split(" to ")[0],
        d = i.split(" to ")[1];
    marcaList.filter(function(e) {
        matchData = (new DOMParser).parseFromString(e.values().status, "text/html");
        var t = matchData.body.firstElementChild.innerHTML,
            a = !1,
            l = !1,
            a = "all" == t || "all" == n || t == n,
            l = new Date(e.values().date.slice(0, 12)) >= new Date(s) && new Date(e.values().date.slice(0, 12)) <= new Date(d);
        return a && l || (a && "" == i ? a : l && "" == i ? l : void 0)
    }), marcaList.update()
}
var count = Number(isValue.replace(/[^0-9]/g, "")) + 1;
addBtn.addEventListener("click", function(e) {
    "" !== marcaNameField.value && "" !== fcField.value && "" !== dateField.value && "" !== phoneField.value && (marcaList.add({
        id: '<a href="javascript:void(0);" class="fw-medium link-primary">#VZ' + count + "</a>",
        marca_name: marcaNameField.value,
        fc: fcField.value,
        date: dateField.value,
        phone: phoneField.value,
        status: isStatus(statusField.value)
    }), document.getElementById("close-modal").click(), clearFields(), refreshCallbacks(), filterContact("All"), count++)
}), editBtn.addEventListener("click", function(e) {
    document.getElementById("exampleModalLabel").innerHTML = "Edit marca", marcaList.get({
        id: idField.value
    }).forEach(function(e) {
        isid = (new DOMParser).parseFromString(e._values.id, "text/html"), isid.body.firstElementChild.innerHTML == itemId && e.values({
            id: '<a href="javascript:void(0);" class="fw-medium link-primary">' + idField.value + "</a>",
            marca_name: marcaNameField.value,
            fc: fcField.value,
            date: dateField.value,
            phone: phoneField.value,
            status: isStatus(statusField.value)
        })
    }), document.getElementById("close-modal").click(), clearFields()
});
var statusVal = new Choices(statusField);

function isStatus(e) {
    switch (e) {
        case "Active":
            return '<span class="badge badge-soft-success text-uppercase">' + e + "</span>";
        case "Block":
            return '<span class="badge badge-soft-danger text-uppercase">' + e + "</span>"
    }
}

function ischeckboxcheck() {
    document.getElementsByName("checkAll").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.target.checked ? e.target.closest("tr").classList.add("table-active") : e.target.closest("tr").classList.remove("table-active")
        })
    })
}

function refreshCallbacks() {
    removeBtns.forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.target.closest("tr").children[1].innerText, itemId = e.target.closest("tr").children[1].innerText, marcaList.get({
                id: itemId
            }).forEach(function(e) {
                deleteid = (new DOMParser).parseFromString(e._values.id, "text/html");
                var t = deleteid.body.firstElementChild;
                deleteid.body.firstElementChild.innerHTML == itemId && document.getElementById("delete-record").addEventListener("click", function() {
                    marcaList.remove("id", t.outerHTML), document.getElementById("deleteRecordModal").click()
                })
            })
        })
    }), editBtns.forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.target.closest("tr").children[1].innerText, itemId = e.target.closest("tr").children[1].innerText, marcaList.get({
                id: itemId
            }).forEach(function(e) {
                isid = (new DOMParser).parseFromString(e._values.id, "text/html");
                var t = isid.body.firstElementChild.innerHTML;
                t == itemId && (idField.value = t, marcaNameField.value = e._values.marca_name, fcField.value = e._values.fc, dateField.value = e._values.date, phoneField.value = e._values.phone, statusVal && statusVal.destroy(), statusVal = new Choices(statusField, {
                    searchEnabled: !1
                }), val = (new DOMParser).parseFromString(e._values.status, "text/html"), t = val.body.firstElementChild.innerHTML, statusVal.setChoiceByValue(t), flatpickr("#date-field", {
                    enableTime: !0,
                    dateFormat: "d M, Y",
                    defaultDate: e._values.date
                }))
            })
        })
    })
}

function clearFields() {
    marcaNameField.value = "", fcField.value = "", dateField.value = "", phoneField.value = ""
}

function deleteMultiple() {
    ids_array = [];
    for (var e, t = document.getElementsByName("chk_child"), a = 0; a < t.length; a++) 1 == t[a].checked && (e = t[a].parentNode.parentNode.parentNode.querySelector(".id a").innerHTML, ids_array.push(e));
    if ("undefined" != typeof ids_array && 0 < ids_array.length) {
        if (!confirm("Are you sure you want to delete this?")) return !1;
        ids_array.forEach(function(e) {
            marcaList.remove("id", `<a href="javascript:void(0);" class="fw-medium link-primary">${e}</a>`)
        }), document.getElementById("checkAll").checked = !1
    } else alert("Please Select Atleast One Checkbox")
}
document.querySelector(".pagination-next").addEventListener("click", function() {
    !document.querySelector(".pagination.listjs-pagination") || document.querySelector(".pagination.listjs-pagination").querySelector(".active") && document.querySelector(".pagination.listjs-pagination").querySelector(".active").nextElementSibling.children[0].click()
}), document.querySelector(".pagination-prev").addEventListener("click", function() {
    !document.querySelector(".pagination.listjs-pagination") || document.querySelector(".pagination.listjs-pagination").querySelector(".active") && document.querySelector(".pagination.listjs-pagination").querySelector(".active").previousSibling.children[0].click()
});