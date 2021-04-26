import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name: 'Rahul',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
        }
    ]
}

export default data;