import React , {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const  NewBookForm= () => {
    const {addBook} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setISBN] = useState('');
    const [plot, setPlot] = useState('');
    const [pageNumber, setPAgeNumber] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author, isbn, plot, pageNumber);
        setTitle('');
        setAuthor('');
        setISBN('');
        setPlot('');
        setPAgeNumber('');
    }

    return (  
        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder='book title' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input type="text" placeholder='ISBN code' value={isbn} onChange={(e) => setISBN(e.target.value)} required />
            <input type="text" placeholder='Plot' value={plot} onChange={(e) => setPlot(e.target.value)} required />
            <input type="text" placeholder='Completed page number' value={pageNumber} onChange={(e) => setPAgeNumber(e.target.value)} required />
            <input type="submit" className="btn-secondary" value="Submit" />
        </form>
    );
}
 
export default NewBookForm;