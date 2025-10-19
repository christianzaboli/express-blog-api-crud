// importo express dal module
const express = require("express");
// creo l'istanza di express
const app = express();
// definisco il numero della porta 
const port = 3000;
// rendo disponibile l'uso dei file nella cartella public
app.use(express.static('public'));


const postsRouter = require('./routers/posts')

// imposto l'indice del server
app.get('/', (req, res) => (
    res.send('Server del mio blog')
));

app.use('/posts', postsRouter)


// metto in ascolto il server sulla porta scelta in precedenza
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});