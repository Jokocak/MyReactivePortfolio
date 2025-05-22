// DataProductCatalog.jsx
function DataProductCatalog() {
  return (
    <div>
      <h3>Data Product Catalog</h3>

      <div className="demo-box">
        {/* Placeholder for a future video or image demonstration */}
      </div>

      <div className="description-box">
        <h4>Description</h4>
        <p>
          This application serves as a comprehensive data product catalog, ingesting metadata to create and manage data assets. Users can design “blueprints,” which group relevant assets into collections for various business needs. An internal recommendation algorithm then leverages these blueprints to suggest potential data products. Users can also browse a catalog of existing data products, assets, and blueprints, each associated with one or more owners to facilitate collaboration and governance.
        </p>
      </div>

      <div className="technologies-box">
        <h4>Technologies</h4>
        <p>
          React, Python, Django, PostgreSQL, Docker
        </p>
      </div>

      <div className="result-box">
        <h4>Results</h4>
        <p>
          This project culminated in a production-ready catalog that generates data product recommendations in under one minute. It also offers robust search and management capabilities for data assets, products, and ownership relationships.
        </p>
      </div>

      <div className="learned-box">
        <h4>Lessons Learned</h4>
        <p>
          Through this project, I refined my expertise in Python and Django for data ingestion, developed efficient algorithms for data product recommendations, and gained practical experience containerizing applications with Docker.
        </p>
      </div>

      <div className="disclaimer-box">
      <h4>Repository Link</h4>

      <p>
        Note: This repository is private. If you would like access, please contact me at <a href="mailto:jamkocak88@gmail.com">jamkocak88@gmail.com</a>. A demo video will be added to this description soon.
      </p>
      </div>
    </div>
  );
}

export default DataProductCatalog;
