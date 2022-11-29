import { useState, useEffect } from 'react';
import getAllProduct from '../utils/getAllProduct';
import Preview from '../components/Preview';

function SearchResult({ keyword }: { keyword: any }) {
  const [searchResult, setSearchResult] = useState<any>([]);
  const [sortingMethod, setSortingMethod] = useState<string>('relevant');

  async function gerResults() {
    const allProduct: string[] | null = await getAllProduct();

    async function filterResults(allProduct: any) {
      let filteredResults = [];
      // filter by title
      filteredResults = allProduct.filter((item: any) => {
        return item.title.toLowerCase().includes(keyword.toLowerCase());
      });
      // return "no results" if no results
    }

    const filteredResults = await filterResults(allProduct);

    // sort filtered products
    async function sortResults(filteredResults: any, sortingMethod: string) {
      switch (sortingMethod) {
        case 'relevant':
          return filteredResults;
        case 'price-high-low':
          return filteredResults.sort((a: any, b: any) => b.price - a.price);
        case 'price-low-high':
          return filteredResults.sort((a: any, b: any) => a.price - b.price);
      }
    }

    const sortedResults = await sortResults(filteredResults, sortingMethod);

    setSearchResult(sortedResults);
  }

  useEffect(() => {
    gerResults();
  }, [searchResult]);

  function handleChange(e: any) {
    setSortingMethod(e.target.value);
  }

  return (
    <section>
      <div>
        <label htmlFor="method">sort by</label>
        <select name="method" id="" onChange={handleChange}>
          <option value="relevant">relevance</option>
          <option value="price-high-low">high</option>
          <option value="price-low-high">low</option>
          <option value="rating">rating</option>
        </select>
      </div>
      <div className="grid grid-cols-3">
        {
          // show search result
          searchResult &&
            searchResult.map((item: any) => {
              return (
                <div key={item.id}>
                  <Preview id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
                </div>
              );
            })
        }
      </div>
    </section>
  );
}

export default SearchResult;
