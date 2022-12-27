import { getDatabase, ref, child, get } from "firebase/database";

function getFamilyMembers(password) {

    const dbRef = ref(getDatabase());

    get(child(dbRef, "families"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                let families = snapshot.val();

                for (let index = 0; index < families.length; index++) {

                    const family = families[index];

                    if (family.password === password) {
                        // TODO: handle empty familyMembers
                        return family.members;
                    }
                }
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => { console.error(error); });
}

export default getFamilyMembers;