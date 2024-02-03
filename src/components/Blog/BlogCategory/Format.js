import React, { useState } from 'react';
import CategorySelector from './CategorySelector';

const Format = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <CategorySelector onSelectCategory={handleSelectCategory} />
            {/* Render other components based on selectedCategory */}
            {selectedCategory && (
                <div>
                    <h2>{selectedCategory} Blogs</h2>
                    {/* Render blogs for the selected category */}
                    {/* Fetch and display blogs based on the selected category */}
                </div>
            )}
        </div>
    );
};

export default Format;
