function Degree({data}) {

    return (
        <div className='pb-3'>
            <span style={{fontWeight: '600'}}>{data.degreeName}</span> - <a href={data.url} target="_blank"> {data.university} </a> 
            <p  style={{marginBottom: '2px'}} className="cvDate">  {data.startDate} - {data.endDate ? data.endDate : 'Present'} </p>
            <div>
                {data.thesisTitle ? <> <span style={{fontWeight: '500'}}>Thesis Title: </span> <span style={{fontWeight: 300}}>{data.thesisTitle}</span> </> : ''}
            </div>
     
        </div>
    );
}

export default Degree;