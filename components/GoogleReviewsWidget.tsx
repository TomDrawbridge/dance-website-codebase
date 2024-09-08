import React from 'react';
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

interface GoogleReviewsWidgetProps {
  className?: string;
  widgetId: string;
}

function GoogleReviewsWidget({ className, widgetId }: GoogleReviewsWidgetProps) {
  return (
    <div className={className}>
      <ReactGoogleReviews 
        layout="carousel" 
        featurableId={widgetId}
      />
    </div>
  );
}

export default GoogleReviewsWidget;