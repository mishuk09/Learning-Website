import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const QuestionSlider = ({ data, questionSize, questionColor, answerSize, answerColor }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const questionStyle = {
        fontSize: questionSize || '20px',
        color: questionColor || 'black',
    };

    const answerStyle = {
        fontSize: answerSize || '16px',
        color: answerColor || 'black',
    };
    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index}>
                    <h2 style={questionStyle}>{item.question}</h2>
                    <p style={answerStyle}>{item.answer}</p>
                </div>
            ))}
        </Slider>
    );
};

const Dsaquestion = () => {
    const questionsAndAnswers = [
        { question: 'What is a linked list?', answer: 'A linked list is a linear data structure with elements called nodes, each containing data and a reference to the next node.' },
        { question: 'What is Big O notation?', answer: 'Big O notation describes algorithm performance based on input size.' },
        { question: 'What is recursion?', answer: 'Recursion is a technique where a function solves a smaller instance of the same problem.' },
        { question: 'Explain the concept of a stack.', answer: 'A stack is a data structure with Last In, First Out behavior.' },
        { question: 'What is a queue?', answer: 'A queue follows First In, First Out behavior.' },
        { question: 'Define an algorithm.', answer: 'An algorithm is a step-by-step procedure to solve a problem or accomplish a task.' },
        { question: 'Explain the concept of hashing.', answer: 'Hashing maps data to a fixed-size value for efficient data access.' },
        { question: 'What is binary search?', answer: 'Binary search efficiently finds a value in a sorted array by halving the search space.' },
        { question: 'What is an array?', answer: 'An array is a collection of elements identified by an index.' },
        { question: 'Explain the concept of a tree in data structures.', answer: 'A tree is a hierarchical structure of connected nodes.' },
    ];

    return (
        <div className=''>
            <h1 className='text-white mt-1 font-sans text-xl font-bold flex items-center justify-center'>DSA Interview Question</h1>
            <hr className='text-slate-400 mt-1' />
            <div className='text-white ms-10 w-[50%]  '>
                <QuestionSlider
                    data={questionsAndAnswers}
                    questionSize='24px'
                    questionColor='#2c9d30'
                    answerSize='18px'
                    answerColor='silver'
                />
            </div>
        </div>
    );
};

export default Dsaquestion;