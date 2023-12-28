let res : null = null ;
let res2 : undefined = undefined
let num : 1 | 2 = 1


// never هرگز

type Ali = {id:1 , name:'ali',age :20}
type Amin = {id:2 , name:'amin',age :23}

type Admins = Ali | Amin 

 const adminLoginHandler = (admin:Admins) => {
    switch(admin.name) {
        case 'ali' : {
            return `ali login shod`
        }
        case 'amin' : {
            return 'amin login shod'
        }
        default : {
            let neverVariable : never = admin
            return neverVariable
        }
    }
 }


function errorMarker (msg,code) {
    throw new Error(JSON.stringify({message : msg , status : code}))
}


errorMarker('Not Found',404)











