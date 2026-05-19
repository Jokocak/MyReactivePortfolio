// Clarus.jsx

function Clarus() {
    return (
        <div>
            <h3>Clarus</h3>

            <div className="demo-box">
                {/* Demo coming soon */}
            </div>

            <div className="description-box">
                <h4>Project Description</h4>
                <p>
                Clarus is a cross-platform, full-stack budgeting and debt-payoff app built in Flutter on top of a Supabase / PostgreSQL backend. It pulls accounts, balances, and liabilities from over 1,000 financial institutions through MethodFi and Plaid to give users a single, unified view of their finances across banks, credit cards, and loans.
                </p>
                <p>
                A dedicated payoff optimizer compares avalanche, snowball, and dynamic-programming strategies against realistic cash-flow constraints and recommends a personalized path out of debt.
                </p>
            </div>

            <div className="technologies-box">
                <h4>Technologies</h4>
                <p>
                Flutter, Dart, Supabase, PostgreSQL, REST APIs, MethodFi, Plaid, OAuth
                </p>
            </div>

            <div className="result-box">
                <h4>Results</h4>
                <p>
                In benchmark scenarios, the dynamic-programming payoff strategy modeled roughly a 50% reduction in total interest paid and shortened time-to-debt-free by 12–24 months versus standard avalanche and snowball methods. User data is isolated per account via row-level security policies across 10 Supabase Postgres tables, enforcing multi-tenant separation at the database layer.
                </p>
            </div>

            <div className="learned-box">
                <h4>Lessons Learned</h4>
                <p>
                Owning Clarus end-to-end — UI, third-party integrations, and the data layer — surfaced real trade-offs in modeling user accounts, sessions, and linked-institution credentials across performance, reliability, and privacy. Each layer of caching or aggregation has implications upstream and downstream, and getting those boundaries right matters more than shipping any individual feature quickly.
                </p>
            </div>

            <div className="disclaimer-box">
                <h4>Repository</h4>
                <p>
                Source is private during development. A public demo and writeup will follow once the app is closer to launch.
                </p>
            </div>
        </div>
    );
}

export default Clarus;
