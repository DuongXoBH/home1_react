function ServiceComponent() {
  return (
    <div className="service container">
    <div className="service__content">
        <p>Main Services</p>
        <p className="service__tittle">Learn services to focus on your beauty</p>
        <p className="service__description">Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
    </div>
    <div className="service__item">
        <div className="service__card">
            <img src="public/images/animation-1.png" alt=""/>
            <p>Beauty consultation</p>
            <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
        </div>
        <div className="service__card">
            <img src="public/images/animation-2.png" alt=""/>
            <p>Skin treatments</p>
            <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
        </div>
        <div className="service__card">
            <img src="public/images/animation-3.png" alt=""/>
            <p>Beauty product</p>
            <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
        </div>
    </div>
</div>
  );
}

export default ServiceComponent;