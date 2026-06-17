import React from "react";

import { Card, Empty, Typography } from "antd";

function PageShell({ title, subtitle, hint, children }) {
  const hasContent = React.Children.count(children) > 0;

  return (
    <Card className="pms-card">
      <Typography.Title level={2} className="pms-page-title">
        {title}
      </Typography.Title>
      <Typography.Paragraph className="pms-page-subtitle">
        {subtitle}
      </Typography.Paragraph>

      {hasContent ? (
        children
      ) : hint ? (
        <div className="pms-empty">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={hint} />
        </div>
      ) : null}
    </Card>
  );
}

export default PageShell;