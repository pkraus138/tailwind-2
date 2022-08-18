class StaticPagesController < ApplicationController
  def home
    @categories_by_topic = categories_by_topic
    @progress = progress
  end

  private

  def categories_by_topic
    [
      {
        name: "Identify",
        categories: [
          {name: "Management Control"},
          {name: "Penetration Testing"},
          {name: "Regulatory Compliance"},
          {name: "Risk Assessment"},
          {name: "Vendor Management", active: true, completed: "85%"}
        ]
      },
      {
        name: "Protect",
        categories: [
          {name: "Application Development"},
          {name: "Configuration Management"},
          {name: "Data Security"},
          {name: "Human Resources"},
          {name: "Information Security Policy"},
          {name: "Logical Access"},
          {name: "Physical Security"},
          {name: "Service Delivery"}
        ]
      },
      {
        name: "Detect",
        categories: [
          {name: "Environmental Security"},
          {name: "Network Monitoring"},
          {name: "Vulnerability Management"}
        ]
      },
      {
        name: "Respond",
        categories: [
          {name: "Incident Response"},
          {name: "Training"}
        ]
      },
      {
        name: "Recover",
        categories: [
          {name: "Backup and Restoration"},
          {name: "Business Continuity & Disaster Recovery"}
        ]
      }
    ]
  end

  def progress
    {
      unanswered: 85,
      in_review: 5,
      pending: 5,
      accepted: 5
    }
  end
end
