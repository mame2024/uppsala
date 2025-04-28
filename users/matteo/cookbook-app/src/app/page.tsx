import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.headline}>Welcome to Flow Cookbook</h1>
        <p className={styles.subheadline}>
          A collection of cherished recipes shared by our employees
        </p>
        <div className={styles.divider}></div>
      </section>

      <div className={styles.columns}>
        <section className={styles.mainColumn}>
          <article className={styles.featuredRecipe}>
            <h2>Featured Recipe</h2>
            <div className={styles.recipeImagePlaceholder}>
              <div className={styles.imagePlaceholder}></div>
            </div>
            <h3>Classic Homemade Lasagna</h3>
            <p className={styles.byline}>By Maria Johnson, Marketing Department</p>
            <p>
              This family recipe has been passed down through generations. The secret is in the slow-simmered 
              sauce and the blend of three different cheeses that create the perfect balance of flavors.
            </p>
            <Link href="/recipes/1" className={styles.readMore}>
              View Recipe →
            </Link>
          </article>

          <div className={styles.recipesGrid}>
            <article className={styles.recipeCard}>
              <h3>Spicy Thai Curry</h3>
              <p className={styles.byline}>By James Lee, Engineering</p>
              <p>A bold and aromatic curry that's surprisingly easy to make on a weeknight.</p>
              <Link href="/recipes/2" className={styles.readMore}>
                View Recipe →
              </Link>
            </article>

            <article className={styles.recipeCard}>
              <h3>Grandma's Apple Pie</h3>
              <p className={styles.byline}>By Robert Chen, Finance</p>
              <p>The perfect balance of sweet and tart with a flaky, buttery crust.</p>
              <Link href="/recipes/3" className={styles.readMore}>
                View Recipe →
              </Link>
            </article>
          </div>
        </section>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h2>Recently Added</h2>
            <ul className={styles.recipeList}>
              <li>
                <Link href="/recipes/4">Vegetarian Chili</Link>
                <span className={styles.recipeDate}>June 12</span>
              </li>
              <li>
                <Link href="/recipes/5">Sourdough Bread</Link>
                <span className={styles.recipeDate}>June 10</span>
              </li>
              <li>
                <Link href="/recipes/6">Summer Gazpacho</Link>
                <span className={styles.recipeDate}>June 7</span>
              </li>
              <li>
                <Link href="/recipes/7">Chocolate Chip Cookies</Link>
                <span className={styles.recipeDate}>June 5</span>
              </li>
              <li>
                <Link href="/recipes/8">Beef Bourguignon</Link>
                <span className={styles.recipeDate}>June 2</span>
              </li>
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <h2>Categories</h2>
            <ul className={styles.categoryList}>
              <li><Link href="/category/main-dishes">Main Dishes</Link></li>
              <li><Link href="/category/desserts">Desserts</Link></li>
              <li><Link href="/category/appetizers">Appetizers</Link></li>
              <li><Link href="/category/soups">Soups & Stews</Link></li>
              <li><Link href="/category/vegetarian">Vegetarian</Link></li>
              <li><Link href="/category/quick-meals">Quick Meals</Link></li>
            </ul>
          </div>

          <div className={styles.callToAction}>
            <h2>Share Your Recipe</h2>
            <p>Have a favorite dish you'd like to share with the company?</p>
            <Link href="/recipes/new" className={styles.submitButton}>
              Submit a Recipe
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
