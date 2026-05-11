import React from 'react'
import { useState } from "react";
import { faqData } from '../../data/faq';
import FaqItem from './FaqItem';
import { useTranslation } from 'react-i18next';

export default function PeopleAsk() {

  const { t } = useTranslation() 

  return (
    <>
      <h3 className="text-2xl">
        {t("peopleAsk.title")}
      </h3>

      {faqData.map((item) => (
        <FaqItem key={item.id} question={t(item.questionKey)} answer={t(item.answerKey)} />
      ))}
    </>
  );
};

