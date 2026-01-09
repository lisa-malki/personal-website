function Job({data}) {
    return (
        <div className='pb-3'>
            <span style={{fontWeight: '600'}}>{data.position}</span> - <a href={data.url} target="_blank"> {data.companyName} </a> 
            <p className="cvDate">{data.startDate} -  {data.endDate ? data.endDate : 'Present'}</p>
            <ul style={{fontSize: '14px'}}>
                {(data.highlights).map((highlight) => 
                (
                    <li>{highlight}</li>
                ))}
            </ul>

        </div>

    );
}

export default Job;