import React from 'react'
import { useState } from "react";
import { faqData } from '../../data/faq';
import FaqItem from './FaqItem';

export default function PeopleAsk() {

  return (
    <>
      <h3 className="text-2xl">
        Más preguntas
      </h3>

      {faqData.map((item) => (
        <FaqItem key={item.id} {...item} />
      ))}
    </>
  );
};

