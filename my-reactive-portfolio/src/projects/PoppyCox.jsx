// PoppyCox.jsx

function PoppyCox() {
    return (
        <div>
            <h3>PoppyCox Data Ingestion Pipeline</h3>

            <div className="description-box">
                <h4>Project Description</h4>
                <p>
                PoppyCox is an automated data ingestion and transformation pipeline that lands third-party financial and operational data in a warehouse and rebuilds analytics tables on a schedule. It pulls data from Toast and Plaid and lands it in a PostgreSQL database hosted on Supabase, then models that raw data into clean, query-ready gold-layer tables.
                </p>
                <p>
                The pipeline is the data backbone for PoppyCox's operations: the modeled tables power a Next.js back-office web application used to run payroll, view employee hours, and manage day-to-day operations. A future mobile app will consume the same data to surface insights from customer and item-sales data.
                </p>
            </div>

            <div className="technologies-box">
                <h4>How It Works</h4>
                <p>
                Two independent scheduled jobs decouple raw landing from downstream modeling. A daily ingest runs at 5:00 AM EST to pull from Toast and Plaid into PostgreSQL, while a separate nightly dbt run at midnight rebuilds the gold-layer analytics tables. Splitting ingest from transform keeps raw landing and modeling independently observable and recoverable.
                </p>
                <p>
                The payroll calculations and payouts table is treated as an append-only, immutable record of history. It is deliberately excluded from the nightly rebuild to preserve an auditable ledger, while every other gold table is fully rebuilt each night.
                </p>
            </div>

            <div className="technologies-box">
                <h4>Technologies</h4>
                <p>
                Python, PostgreSQL, Supabase, dbt, Toast API, Plaid API, scheduled batch pipelines
                </p>
            </div>

            <div className="result-box">
                <h4>Results</h4>
                <p>
                The pipeline delivers a reliable, scheduled flow of modeled data that downstream consumers can depend on without touching raw sources. Decoupled morning ingest and midnight transform jobs isolate failures to a single stage, and the append-only payroll ledger guarantees an auditable financial history that can never be silently overwritten by a rebuild.
                </p>
            </div>

            <div className="learned-box">
                <h4>Lessons Learned</h4>
                <p>
                The most important decisions were about boundaries, not features. Separating ingestion from transformation, and carving the immutable payroll ledger out of the nightly rebuild, made the difference between a warehouse that is trustworthy under audit and one that is merely convenient. Designing the data layer as a contract for downstream consumers — today a Next.js back office, tomorrow a mobile app — forced clarity about what "done" and "correct" mean for each table.
                </p>
            </div>

            <div className="disclaimer-box">
                <h4>Repository</h4>
                <p>
                Source is private. This project is internal infrastructure and is not publicly available.
                </p>
            </div>
        </div>
    );
}

export default PoppyCox;
