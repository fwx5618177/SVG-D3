import React from 'react';
import { Button, Card } from 'antd';
import { jsPDF } from 'jspdf';

const PDFGenerator = () => {

    const getPdf = () => {
        const doc = new jsPDF({
            // orientation: 'landscape',
            // unit: 'in',
            // // format: [4,2]
        });
        
        doc.text("Hello World!", 4, 40);
        doc.save("a4.pdf")
    }

    return (
        <>
        <Card>
            <Button onClick={getPdf} type='primary'>Pdf</Button>
        </Card>
        
        </>
    )
}

export default PDFGenerator;