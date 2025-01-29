import categories from "../assets/Categories";
import styled from "styled-components";

// Styled components
const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 items per row */
  gap: 16px; /* Spacing between boxes */
  padding: 0;
  list-style: none;
`;

const CategoryItem = styled.li`
  background-color: #f0f0f0; /* Light gray background */
  border: 1px solid #ddd; /* Border for the box */
  border-radius: 8px; /* Rounded corners */
  padding: 16px; /* Inner padding */
  text-align: center; /* Center text inside the box */
  font-size: 1rem; /* Font size */
  font-weight: bold;
  color: #333; /* Text color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  cursor: pointer; /* Pointer cursor */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px); /* Slight lift on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Stronger shadow */
  }
`;

export default function CategoryView() {
  return (
    <CategoryList>
      {categories.map((category, index) => (
        <CategoryItem onClick={handleCategorySearch} key={index}>
          {category}
        </CategoryItem>
      ))}
    </CategoryList>
  );
}

const handleCategorySearch = () => {
  const {
    loading,
    error,
    resultBooks,
    setResultBooks,
    setLoading,
    setError,
    setCart,
  } = useContext(AppContext);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setError(null); // Reset error
        setLoading(true); // Show loading spinner

        const response = await fetch(`https://gutendex.com/topic=${category}}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product with ID: ${productId}`);
        }

        const data = await response.json();

        console.log(data);
        setResultBooks(data); // Store product data in context
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
};
