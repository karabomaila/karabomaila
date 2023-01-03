const mongoose =  require('mongoose')

if (process.argv.length < 3)
{
    console.log("Provide the password")
    process.exit(1);
}

const password = process.argv[2]

//const url = `mongodb+srv://notes-app-full:${password}@cluster1.lvvbt.mongodb.net/?retryWrites=true&w=majority`
const url = `mongodb+srv://KaraboMaila:${password}@cluster0.lxme7cr.mongodb.net/blog?retryWrites=true&w=majority`

const blogSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Blog = mongoose.model("Blog", blogSchema)

mongoose
    .connect(url)
    .then((result) => {
        console.log("connected")

        const blog = new Blog({
            content: 'Blog blog',
            date: new Date,
            important: false
        })

        return blog.save()
    })
    .then(() => {
        console.log("Blog saved")
        return mongoose.connection.close()
    })
    .catch((err) => {
        console.log(err)
    })
