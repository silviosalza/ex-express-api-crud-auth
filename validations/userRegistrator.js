module.exports = {
    name: {
        in: ["body"],
        notEmpty: {
          options: {
            ignore_whitespace: true
          }  
        },
        isLength: {
            options:{
                min: 2
            }
        },
        errorMessage: "Il nome non è valido"
    },
    email: {
        in: ["body"],
        notEmpty: {
          options: {
            ignore_whitespace: true
          }  
        },
        isLength: {
            options:{
                min: 5
            }
        },
        errorMessage: "Email non valida"
    },
    password: {
        in: ["body"],
        isStongPassword: {
            options:{
                minLength: 8,
                minLowerCase:1,
                minUpperCase:1,
                minNumbers:1,
                minSymbols:1,
            }
        },
        errorMessage: "Password non valida"
    }
}