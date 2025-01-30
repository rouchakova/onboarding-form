import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaQuestionCircle } from "react-icons/fa";
import logo from './logo.svg';  // Adjust the path to where your logo is stored

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    genericInventoryMix: {},
    webTechnicalInfo: {
      integrationMethods: [],      // For multiple choice
      preferredIntegration: "",    // For dropdown
      videoPlayers: "",           // For text input
      pricingStrategy: "",        // For dropdown
      pricingVendor: "",         // Conditional text input
      floorIntegration: "",      // Conditional text input
      sovrnOptimization: "",     // Conditional dropdown
      requestVolume: {
        display: "",
        video: ""
      },
      trafficRegions: {
        display: {
          northAmerica: "",
          emea: "",
          apac: "",
          latam: ""
        },
        video: {
          northAmerica: "",
          emea: "",
          apac: "",
          latam: ""
        }
      },
      dataCenters: [],           // For multiple choice
      dataAvailability: "",      // For text input
      sensitiveCategories: [],    // For multiple choice
      impressionTracking: {},
      videoTrackingSupport: "",
      impressionPixelEvent: "",
      impressionPixelSide: "",
      impressionPixelTiming: "",
      bidCaching: "",
      tmaxControl: "",
      expiryTime: "",
      // ... add other fields
    },
    ctvAppTechnicalInfo: {},
    sellerInfo: {},
  });

  const handleInputChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add logic to send formData to a backend API
  };

  return (
    <div className="p-16 max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-sm m-8 bg-white" style={{
      margin: '4rem auto',
      padding: '6rem',
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      maxWidth: '1400px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      lineHeight: '1.8'
    }}>
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-2xl font-bold mb-4">Sovrn Tech Form</h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Generic Inventory Mix</Tab>
          <Tab>WEB - Technical Info</Tab>
          <Tab>CTVAPP - Technical Info</Tab>
        </TabList>

        {/* Generic Inventory Mix Tab */}
        <TabPanel>
          <div>
            <h3 className="text-xl font-semibold mb-8">Section 1: Generic Inventory Mix</h3>

            {/* Question 1.a */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">1.a.</span>
                <span className="question-text"> Please select all Environments in which you operate:</span>
              </label>
              <div className="checkbox-group">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Mobile In-App"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "environments", {
                          ...formData.genericInventoryMix.environments,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    Mobile In-App
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Desktop In-App"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "environments", {
                          ...formData.genericInventoryMix.environments,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    Desktop In-App
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="CTV/OTT"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "environments", {
                          ...formData.genericInventoryMix.environments,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    CTV/OTT
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="WEB"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "environments", {
                          ...formData.genericInventoryMix.environments,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    WEB
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="OOH"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "environments", {
                          ...formData.genericInventoryMix.environments,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    OOH
                  </label>
                </div>
              </div>
            </div>

            {/* Question 1.b */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">1.b.</span>
                <span className="question-text"> What formats of advertising do you support in these environments?</span>
              </label>
              <div className="checkbox-group">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Display"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "adFormats", {
                          ...formData.genericInventoryMix.adFormats,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    Display
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Video"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "adFormats", {
                          ...formData.genericInventoryMix.adFormats,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    Video
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Interstitial - WEB"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "adFormats", {
                          ...formData.genericInventoryMix.adFormats,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    Interstitial - WEB
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Interstitial - APP"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "adFormats", {
                          ...formData.genericInventoryMix.adFormats,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    Interstitial - APP
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Native - WEB"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "adFormats", {
                          ...formData.genericInventoryMix.adFormats,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    Native - WEB
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Native - APP"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "adFormats", {
                          ...formData.genericInventoryMix.adFormats,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    Native - APP
                  </label>
                </div>
              </div>
            </div>

            {/* Question 1.c */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">1.c.</span>
                <span className="question-text"> Do you own and operate (O&O) the inventory (or manufacture a device) that you intend to monetize through Sovrn? OR act as an intermediary that handles or facilitates monetization on the owner's behalf? (If you work in both capacities, please select Both in the dropdown):</span>
              </label>
              <div className="flex flex-col gap-2">
                <select
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("genericInventoryMix", "ownershipType", e.target.value)
                  }
                >
                  <option value="">Select an option</option>
                  <option value="Intermediary">Intermediary</option>
                  <option value="O&O">O&O</option>
                  <option value="Both">Both</option>
                </select>

                {formData.genericInventoryMix.ownershipType === "Both" && (
                  <div className="flex flex-col gap-2">
                    <label className="block text-sm text-gray-600">
                      If Both, please provide a rough estimate of the proportion of resold Inventory you will be sending to Sovrn:
                    </label>
                    <select
                      className="border p-2"
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "resoldProportion", e.target.value)
                      }
                    >
                      <option value="">Select an option</option>
                      <option value="<25%">{"<25%"}</option>
                      <option value="25-50%">25-50%</option>
                      <option value=">50%">{">50%"}</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Question 1.d */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">1.d.</span>
                <span className="question-text"> Which category of seller best suits your offering? (Please select all that apply):</span>
              </label>
              
              <div className="checkbox-group">
                {/* Owned & Operated Category */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Owned & Operated</h4>
                  <div className="space-y-2 ml-4">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Publisher"
                          onChange={(e) =>
                            handleInputChange("genericInventoryMix", "sellerCategoryOO", {
                              ...formData.genericInventoryMix.sellerCategoryOO,
                              [e.target.value]: e.target.checked,
                            })
                          }
                        />
                        Publisher
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Device Manufacturer"
                          onChange={(e) =>
                            handleInputChange("genericInventoryMix", "sellerCategoryOO", {
                              ...formData.genericInventoryMix.sellerCategoryOO,
                              [e.target.value]: e.target.checked,
                            })
                          }
                        />
                        Device Manufacturer (OEM)
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="App Developer"
                          onChange={(e) =>
                            handleInputChange("genericInventoryMix", "sellerCategoryOO", {
                              ...formData.genericInventoryMix.sellerCategoryOO,
                              [e.target.value]: e.target.checked,
                            })
                          }
                        />
                        App Developer
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="MVPD"
                          onChange={(e) =>
                            handleInputChange("genericInventoryMix", "sellerCategoryOO", {
                              ...formData.genericInventoryMix.sellerCategoryOO,
                              [e.target.value]: e.target.checked,
                            })
                          }
                        />
                        MVPD (Multichannel Video Programming Distributor) or FAST Platform
                      </label>
                    </div>
                  </div>
                </div>

                {/* Intermediary Category */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Intermediary</h4>
                  <div className="space-y-2 ml-4">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="SSP"
                          onChange={(e) =>
                            handleInputChange("genericInventoryMix", "sellerCategoryIntermediary", {
                              ...formData.genericInventoryMix.sellerCategoryIntermediary,
                              [e.target.value]: e.target.checked,
                            })
                          }
                        />
                        Supply Side Platform (SSP)
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Technology Solution"
                          onChange={(e) =>
                            handleInputChange("genericInventoryMix", "sellerCategoryIntermediary", {
                              ...formData.genericInventoryMix.sellerCategoryIntermediary,
                              [e.target.value]: e.target.checked,
                            })
                          }
                        />
                        Technology Solution (ex. Server Side Ad-Insertion, Ad Server, etc.)
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Ad Network"
                          onChange={(e) =>
                            handleInputChange("genericInventoryMix", "sellerCategoryIntermediary", {
                              ...formData.genericInventoryMix.sellerCategoryIntermediary,
                              [e.target.value]: e.target.checked,
                            })
                          }
                        />
                        Ad Network
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Supplemental Content"
                          onChange={(e) =>
                            handleInputChange("genericInventoryMix", "sellerCategoryIntermediary", {
                              ...formData.genericInventoryMix.sellerCategoryIntermediary,
                              [e.target.value]: e.target.checked,
                            })
                          }
                        />
                        Supplemental Content Solution or Syndication Partner
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          value="Data Vendor"
                          onChange={(e) =>
                            handleInputChange("genericInventoryMix", "sellerCategoryIntermediary", {
                              ...formData.genericInventoryMix.sellerCategoryIntermediary,
                              [e.target.value]: e.target.checked,
                            })
                          }
                        />
                        Data/Audience Enrichment Vendor
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 1.e */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">1.e.</span>
                <span className="question-text">
                  What portion of your inventory, if any, is child directed/subject to COPPA regulation per the FTC (Federal Trade Commission)?
                </span>
              </label>
              <div className="flex flex-col gap-2">
                <select
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("genericInventoryMix", "coppaInventory", e.target.value)
                  }
                >
                  <option value="">Select an option</option>
                  <option value="none">None, our entire audience is considered General Audience</option>
                  <option value="less_than_25">&lt; 25%</option>
                  <option value="25_to_50">25-50%</option>
                  <option value="more_than_50">&gt;50%</option>
                </select>
              </div>
            </div>

            {/* Question 1.f */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">1.f.</span>
                <span className="question-text">
                  (APP Specific Question) On what AppStores can your applications be found? (Please select all that apply):
                </span>
              </label>
              <div className="checkbox-group">
                {[
                  "Apple App Store",
                  "Google Play Store",
                  "Roku Channel Store",
                  "Samsung Apps & Services",
                  "Playstation Store",
                  "LG Content Store",
                  "Amazon Fire Store"
                ].map((store) => (
                  <div key={store}>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={store}
                        onChange={(e) =>
                          handleInputChange("genericInventoryMix", "appStores", {
                            ...formData.genericInventoryMix.appStores,
                            [e.target.value]: e.target.checked,
                          })
                        }
                      />
                      {store}
                    </label>
                  </div>
                ))}
                <div>
                  <label className="block font-medium mb-4">Other (Please list other providers):</label>
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      className="border p-2"
                      placeholder="Enter other app stores..."
                      onChange={(e) =>
                        handleInputChange("genericInventoryMix", "otherAppStores", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Seller Information */}
          <div className="mt-24">
            <h3 className="text-xl font-semibold mb-8">Section 2: Seller Information</h3>
            
            {/* Business Information */}
            <div className="mb-6">
              <label className="block font-medium mb-6">
                <span className="question-ref">2.a.</span>
                <span className="question-text"> Business Information</span>
              </label>
              <p className="text-sm text-gray-500 mb-4">
                Ensure that you are providing your canonical business domain/Advertising System Identifier/Developer Website
              </p>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">
                  Please Provide your Business Name:
                </label>
                <input
                  type="text"
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("sellerInfo", "businessName", e.target.value)
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">
                  Please Provide your Business Domain:
                </label>
                <input
                  type="text"
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("sellerInfo", "businessDomain", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Sellers.json Information */}
            <div className="mb-6">
              <label className="block font-medium mb-6">
                <span className="question-ref">2.b.</span>
                <span className="question-text"> Do you host a sellers.json file?</span>
              </label>
              <div className="flex flex-col gap-2">
                <select
                  className="border p-2"
                  onChange={(e) => {
                    handleInputChange("sellerInfo", "hasSellersJson", e.target.value);
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                {formData.sellerInfo?.hasSellersJson === "yes" && (
                  <div className="flex flex-col gap-2">
                    <label className="block text-sm text-gray-600">
                      Please provide the URL for your JSON file:
                    </label>
                    <input
                      type="text"
                      className="border p-2"
                      placeholder="https://"
                      onChange={(e) =>
                        handleInputChange("sellerInfo", "sellersJsonUrl", e.target.value)
                      }
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Intermediary Questions */}
            <div className="mb-6">
              <label className="block font-medium mb-6">
                <span className="question-ref">2.c.</span>
                <span className="question-text"> For Entities Acting as An Intermediary:</span>
              </label>
              
              <div className="space-y-8">
                {/* Payment Handling */}
                <div className="flex flex-col gap-2">
                  <label className="block text-sm text-gray-600">
                    Do you handle payment to the publishers you work with?
                  </label>
                  <select
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("sellerInfo", "handlesPayment", e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="yes_pass_payment">Yes, we are paid by demand partners and pass along payment upstream to our publishers</option>
                    <option value="no_charge_fee">No, we charge a fee for our services that is paid to us by the publishers we work with</option>
                  </select>
                </div>

                {/* Supply Chain Support */}
                <div className="flex flex-col gap-2">
                  <label className="block text-sm text-gray-600">
                    Do you support the SupplyChain Object (schain) in the bid request?
                  </label>
                  <select
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("sellerInfo", "supportsSupplyChain", e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Inventory Proportion */}
                <div className="flex flex-col gap-2">
                  <label className="block text-sm text-gray-600">
                    Please provide a rough estimate of the proportion of your inventory accessed directly from the Publisher vs indirectly through other intermediaries:
                  </label>
                  <select
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("sellerInfo", "directInventoryProportion", e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="all_direct">We hold direct relationships with all of the publishers we intend to monetize with Sovrn</option>
                    <option value="75_direct">75% Direct, 25% Indirect</option>
                    <option value="50_50">50-50 Direct to Indirect</option>
                    <option value="less_50_direct">&lt;50% Direct - The majority of our inventory is accessed Indirectly</option>
                  </select>
                </div>

                {/* Segmentation Capability */}
                <div className="flex flex-col gap-2">
                  <label className="block text-sm text-gray-600">
                    Do you have the capability to segment out and target toward your directly accessed vs indirectly accessed supply?
                  </label>
                  <select
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("sellerInfo", "hasSegmentationCapability", e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* APP/CTV Specific Questions */}
            <div className="mb-6">
              <label className="block font-medium mb-6">
                <span className="question-ref">2.d.</span>
                <span className="question-text"> (APP/CTV Specific Question) For MVPD/FAST Platforms and Select App Developers:</span>
              </label>
              
              <div className="space-y-8">
                {/* Third-party Content Display */}
                <div className="flex flex-col gap-2">
                  <label className="block text-sm text-gray-600">
                    Does your platform/app display content licensed by third-parties?
                  </label>
                  <select
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("sellerInfo", "hasThirdPartyContent", e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Documentation Availability */}
                <div className="flex flex-col gap-2">
                  <label className="block text-sm text-gray-600">
                    Do you have readily available documentation expressing the content owner's consent to display and monetize their content?
                  </label>
                  <select
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("sellerInfo", "hasContentConsent", e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Supplemental Content Questions */}
            <div className="mb-6">
              <label className="block font-medium mb-6">
                <span className="question-ref">2.e.</span>
                <span className="question-text"> (APP/CTV Specific Question) For Supplemental Content Solutions or Syndication Partners:</span>
              </label>
              
              <div className="flex flex-col gap-2">
                <label className="block text-sm text-gray-600">
                  If available, please link to collateral demonstrating the nature of this offering (i.e. where and when the content displays in the third-party application, what the display looks like, etc.):
                </label>
                <textarea
                  className="border p-2"
                  placeholder="Enter URL or description here..."
                  onChange={(e) =>
                    handleInputChange("sellerInfo", "supplementalContentCollateral", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </TabPanel>

        {/* WEB - Technical Info Tab */}
        <TabPanel>
          <h2 className="text-xl font-semibold mb-2">WEB - Technical Info</h2>
          
          {/* Integration Methods */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">1.a.</span>
              <span className="question-text"> Please Select All Available Integration Methods:</span>
            </label>
            <div className="checkbox-group">
              {[
                "oRTB - 2.5/2.6",
                "TAM",
                "UAM",
                "Header Bidding",
                "Prebid Server",
                "Open Bidding",
                "Other"
              ].map((method) => (
                <div key={method} className="flex items-center gap-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={method}
                      onChange={(e) =>
                        handleInputChange("webTechnicalInfo", "integrationMethods", {
                          ...formData.webTechnicalInfo.integrationMethods,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    {method}
                  </label>
                  {method === "Other" && 
                    formData.webTechnicalInfo.integrationMethods?.["Other"] && (
                      <input
                        type="text"
                        className="border p-2 ml-2"
                        placeholder="Please specify"
                        onChange={(e) =>
                          handleInputChange("webTechnicalInfo", "otherIntegrationMethod", e.target.value)
                        }
                      />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Preferred Integration Method */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">1.b.</span>
              <span className="question-text"> Please select your preferred Integration Method:</span>
            </label>
            <div className="flex flex-col gap-2">
              <select
                className="border p-2"
                onChange={(e) =>
                  handleInputChange("webTechnicalInfo", "preferredIntegration", e.target.value)
                }
              >
                <option value="">Select an option</option>
                <option value="oRTB">oRTB - 2.5/2.6</option>
                <option value="TAM">TAM</option>
                <option value="UAM">UAM</option>
                <option value="Header Bidding">Header Bidding</option>
                <option value="Prebid Server">Prebid Server</option>
                <option value="Open Bidding">Open Bidding</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Video Player Question */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">1.c.</span>
              <span className="question-text"> Which Video Player are you using?</span>
            </label>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">
                List out all the players currently in use with relevant details:
              </label>
              <textarea
                className="border p-2"
                rows="4"
                onChange={(e) =>
                  handleInputChange("webTechnicalInfo", "videoPlayers", e.target.value)
                }
              />
            </div>
          </div>

          {/* Pricing Strategy Section */}
          <h3 className="text-xl font-semibold mb-8">Pricing Strategy</h3>

          {/* Pricing Strategy Question */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">1.d.</span>
              <span className="question-text"> Are you currently implementing any Pricing Strategy?</span>
            </label>
            <div className="flex flex-col gap-2">
              <select
                className="border p-2"
                onChange={(e) =>
                  handleInputChange("webTechnicalInfo", "pricingStrategy", e.target.value)
                }
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              {formData.webTechnicalInfo?.pricingStrategy === "yes" && (
                <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <label className="block text-sm text-gray-600">
                      Which vendor are you currently using OR can you elaborate on your strategy?
                    </label>
                    <textarea
                      className="border p-2"
                      onChange={(e) =>
                        handleInputChange("webTechnicalInfo", "pricingVendor", e.target.value)
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="block text-sm text-gray-600">
                      On which integration are you currently using Floors?
                    </label>
                    <input
                      type="text"
                      className="border p-2"
                      onChange={(e) =>
                        handleInputChange("webTechnicalInfo", "floorIntegration", e.target.value)
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="block text-sm text-gray-600">
                      Are you comfortable with Sovrn optimising your traffic with Floors?
                    </label>
                    <select
                      className="border p-2"
                      onChange={(e) =>
                        handleInputChange("webTechnicalInfo", "sovrnOptimization", e.target.value)
                      }
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500 italic">
                      Please note that Sovrn's Dynamic Floors will always honour, as a hard floor, the floor passed in the bid stream
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Request Volume */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">1.e.</span>
              <span className="question-text"> Total Request Volume - Please specify if daily or monthly:</span>
            </label>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">Display:</label>
                <input
                  type="text"
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("webTechnicalInfo", "requestVolume", {
                      ...formData.webTechnicalInfo.requestVolume,
                      display: e.target.value
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">Video:</label>
                <input
                  type="text"
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("webTechnicalInfo", "requestVolume", {
                      ...formData.webTechnicalInfo.requestVolume,
                      video: e.target.value
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Traffic Regions */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">1.f.</span>
              <span className="question-text"> Percentage of available traffic in the following regions:</span>
            </label>
            
            <div className="space-y-8">
              {/* Display Traffic */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-medium text-gray-600">Display</label>
                {["North America", "EMEA", "APAC", "LATAM"].map((region) => (
                  <div key={region} className="flex flex-col gap-2">
                    <label className="text-sm text-gray-600">{region}:</label>
                    <input
                      type="text"
                      className="border p-2"
                      onChange={(e) =>
                        handleInputChange("webTechnicalInfo", "trafficRegions", {
                          ...formData.webTechnicalInfo.trafficRegions,
                          display: {
                            ...formData.webTechnicalInfo.trafficRegions.display,
                            [region.toLowerCase().replace(' ', '')]: e.target.value
                          }
                        })
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Video Traffic */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-medium text-gray-600">Video</label>
                {["North America", "EMEA", "APAC", "LATAM"].map((region) => (
                  <div key={region} className="flex flex-col gap-2">
                    <label className="text-sm text-gray-600">{region}:</label>
                    <input
                      type="text"
                      className="border p-2"
                      onChange={(e) =>
                        handleInputChange("webTechnicalInfo", "trafficRegions", {
                          ...formData.webTechnicalInfo.trafficRegions,
                          video: {
                            ...formData.webTechnicalInfo.trafficRegions.video,
                            [region.toLowerCase().replace(' ', '')]: e.target.value
                          }
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Centers */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">1.g.</span>
              <span className="question-text"> Please outline where your Data Centres are located:</span>
            </label>
            <div className="checkbox-group">
              {["US", "EU", "APAC"].map((location) => (
                <div key={location}>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={location}
                      onChange={(e) =>
                        handleInputChange("webTechnicalInfo", "dataCenters", {
                          ...formData.webTechnicalInfo.dataCenters,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    {location}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Data Availability */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">1.h.</span>
              <span className="question-text"> Do you make any first/third party data available to buyers/advertisers wanting to create PMPs?</span>
            </label>
            <div className="flex flex-col gap-2">
              <textarea
                className="border p-2"
                onChange={(e) =>
                  handleInputChange("webTechnicalInfo", "dataAvailability", e.target.value)
                }
              />
            </div>
          </div>

          {/* Sensitive Categories */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">1.i.</span>
              <span className="question-text"> Please select all sensitive categories your supply is eligible for:</span>
            </label>
            <div className="checkbox-group">
              {["Pharma", "Gambling", "LDA Advertisers", "Political"].map((category) => (
                <div key={category}>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={category}
                      onChange={(e) =>
                        handleInputChange("webTechnicalInfo", "sensitiveCategories", {
                          ...formData.webTechnicalInfo.sensitiveCategories,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: oRTB Technical Questions */}
          <h3 className="text-xl font-semibold mb-8">Section 2: oRTB Technical Questions</h3>

          {/* Impression Tracking Method */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">2.a.</span>
              <span className="question-text"> Supported Impression Tracking Method:</span>
            </label>
            <div className="checkbox-group">
              {[
                "ADM",
                "BURL - not currently supported",
                "nURL - least preferred"
              ].map((method) => (
                <div key={method}>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={method}
                      onChange={(e) =>
                        handleInputChange("webTechnicalInfo", "impressionTracking", {
                          ...formData.webTechnicalInfo.impressionTracking,
                          [e.target.value]: e.target.checked,
                        })
                      }
                    />
                    {method}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Video Specific Tracking */}
          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">2.b.</span>
              <span className="question-text"> Video Specific - do you support impression tracking by the VAST impression event or nURL/bURL?</span>
            </label>
            <div className="flex flex-col gap-2">
              <textarea
                className="border p-2"
                onChange={(e) =>
                  handleInputChange("webTechnicalInfo", "videoTrackingSupport", e.target.value)
                }
              />
            </div>
          </div>

          {/* Ad-call Flow & Creative Rendering */}
          <h3 className="text-xl font-semibold mb-8">Ad-call Flow & Creative Rendering</h3>

          {/* Questions 2.c through 2.h */}
          {[
            {
              ref: "2.c",
              question: "What event causes the impression pixel to fire?",
              field: "impressionPixelEvent"
            },
            {
              ref: "2.d",
              question: "Does the impression pixel fire client or server-side?",
              field: "impressionPixelSide"
            },
            {
              ref: "2.e",
              question: "Does the impression pixel fire before or after creative rendering?",
              field: "impressionPixelTiming"
            },
            {
              ref: "2.f",
              question: "Do you cache bids on your end for any purpose? elaborate on the different purposes",
              field: "bidCaching"
            },
            {
              ref: "2.g",
              question: "Do you have control over the tmax sent to Sovrn in the bid request?",
              field: "tmaxControl"
            },
            {
              ref: "2.h",
              question: "What is your expiry time for Video and Display?",
              field: "expiryTime"
            }
          ].map((item) => (
            <div key={item.ref} className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">{item.ref}</span>
                <span className="question-text"> {item.question}</span>
              </label>
              <div className="flex flex-col gap-2">
                <textarea
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("webTechnicalInfo", item.field, e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          {/* Ad Quality */}
          <h3 className="text-xl font-semibold mb-8">Ad Quality</h3>

          {/* Questions 2.i through 2.l */}
          {[
            {
              ref: "2.i",
              question: "Do you conduct creative scanning?",
              field: "creativeScanning"
            },
            {
              ref: "2.j",
              question: "Which Partner is used for Creative Scanning?",
              field: "creativeScanningPartner"
            },
            {
              ref: "2.k",
              question: "Rate of creative scanning (how often is this running)",
              field: "creativeScanningRate"
            },
            {
              ref: "2.l",
              question: "Are there any limitations on creative payload (size in KB, etc)? If so please describe them.",
              field: "creativePayloadLimits"
            }
          ].map((item) => (
            <div key={item.ref} className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">{item.ref}</span>
                <span className="question-text"> {item.question}</span>
              </label>
              <div className="flex flex-col gap-2">
                <textarea
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("webTechnicalInfo", item.field, e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          {/* Reporting */}
          <h3 className="text-xl font-semibold mb-8">Reporting</h3>

          <div className="mb-12">
            <label className="block font-medium mb-6">
              <span className="question-ref">2.m.</span>
              <span className="question-text"> Are you able to provide daily reports in UTC time zone by email? (impressions, Revenue)</span>
            </label>
            <div className="flex flex-col gap-2">
              <select
                className="border p-2"
                onChange={(e) =>
                  handleInputChange("webTechnicalInfo", "dailyReports", e.target.value)
                }
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* oRTB Requirements */}
          <h3 className="text-xl font-semibold mb-8">oRTB Requirements</h3>

          {/* oRTB Questions */}
          {[
            {
              question: "Which version of the oRTB are you currently using?",
              field: "ortbVersion"
            },
            {
              question: "Is your platform propriarity or do you use a third party?",
              field: "platformType"
            },
            {
              question: "Do you have any public available documentation on your oRTB spec? Can this be provided?",
              field: "ortbDocumentation"
            },
            {
              question: "Do you require any fields outside of the spec? If so, please list them.",
              field: "additionalFields"
            },
            {
              question: "We require for you to place an account-specific ID in the site.publisher.id field of all your requests. Are you able to support this?",
              field: "publisherIdSupport"
            },
            {
              question: "Do you support gzip?",
              field: "gzipSupport"
            },
            {
              question: "We require for you to send tag identifiers in the imp.tagid field. Are you able to support this?",
              field: "tagIdSupport"
            }
          ].map((item, index) => (
            <div key={index} className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-text">{item.question}</span>
              </label>
              <div className="flex flex-col gap-2">
                <textarea
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("webTechnicalInfo", item.field, e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          {/* Cookie Matching Section */}
          <h4 className="text-lg font-medium mb-6">Cookie Matching</h4>

          {[
            {
              question: "Are you able to host the cookie match table on your servers? If so can share the URL location?",
              field: "cookieMatchHosting"
            },
            {
              question: "Are you able to initiate user sync with Sovrn from your traffic?",
              field: "userSyncCapability"
            },
            {
              question: "Do you require to store any specific data points in your match table?",
              field: "matchTableData"
            },
            {
              question: "If you checked \"YES\" to the above question, can you please provide the list MACROs to be added to your redirect URL?",
              field: "redirectUrlMacros"
            },
            {
              question: "Are you able to pass GDPR or the GPP consent with user match requests?",
              field: "consentPassing"
            },
            {
              question: "What is the average match rate of your supply with other providers like Sovrn?",
              field: "averageMatchRate"
            },
            {
              question: "Do you support eids and are you going to pass it in the request?",
              field: "eidsSupport"
            },
            {
              question: "Which eids are you passing?",
              field: "eidsTypes"
            }
          ].map((item, index) => (
            <div key={index} className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-text">{item.question}</span>
              </label>
              <div className="flex flex-col gap-2">
                <textarea
                  className="border p-2"
                  onChange={(e) =>
                    handleInputChange("webTechnicalInfo", item.field, e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </TabPanel>

        {/* CTVAPP - Technical Info Tab */}
        <TabPanel>
          <h2 className="text-xl font-semibold mb-8">CTVAPP - Technical Info</h2>

          {/* Section 5: Technical Info */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Section 5: Technical Info</h3>

            {/* Integration Methods */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">5.a.</span>
                <span className="question-text"> Please Select All Available Integration Methods:</span>
              </label>
              <div className="checkbox-group">
                {[
                  "oRTB (2.5/2.6)",
                  "Publica Ad Server",
                  "SpringServe Server-side Header Bidding",
                  "Nimbus Ad Server",
                  "TAM",
                  "Prebid Server",
                  "Other"
                ].map((method) => (
                  <div key={method} className="flex items-center gap-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={method}
                        onChange={(e) =>
                          handleInputChange("ctvAppTechnicalInfo", "integrationMethods", {
                            ...formData.ctvAppTechnicalInfo.integrationMethods,
                            [e.target.value]: e.target.checked,
                          })
                        }
                      />
                      {method}
                    </label>
                    {method === "Other" && 
                      formData.ctvAppTechnicalInfo.integrationMethods?.["Other"] && (
                        <input
                          type="text"
                          className="border p-2 ml-2"
                          placeholder="Please specify"
                          onChange={(e) =>
                            handleInputChange("ctvAppTechnicalInfo", "otherIntegrationMethod", e.target.value)
                          }
                        />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Preferred Integration Method */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">5.b.</span>
                <span className="question-text"> Please select your preferred Integration Method:</span>
              </label>
              <select
                className="border p-2"
                onChange={(e) =>
                  handleInputChange("ctvAppTechnicalInfo", "preferredIntegration", e.target.value)
                }
              >
                <option value="">Select an option</option>
                <option value="oRTB">oRTB (2.5/2.6)</option>
                <option value="Publica">Publica Ad Server</option>
                <option value="SpringServe">SpringServe Server-side Header Bidding</option>
                <option value="Nimbus">Nimbus Ad Server</option>
                <option value="TAM">TAM</option>
                <option value="Prebid">Prebid Server</option>
              </select>
            </div>

            {/* Request Volumes */}
            <div className="mb-12">
              <label className="block font-medium mb-6">Request Volumes (Please specify if daily or monthly):</label>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600">Total CTV Request Volume (if applicable):</label>
                  <input
                    type="text"
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("ctvAppTechnicalInfo", "ctvRequestVolume", e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600">Total In-App Request Volume (if applicable):</label>
                  <input
                    type="text"
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("ctvAppTechnicalInfo", "inAppRequestVolume", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Traffic Regions */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">5.e.</span>
                <span className="question-text"> Percentage of available traffic in the following regions:</span>
              </label>
              
              <div className="space-y-8">
                {/* In-APP Traffic */}
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-medium text-gray-600">In-APP</label>
                  {["North America", "EMEA", "APAC", "LATAM"].map((region) => (
                    <div key={region} className="flex flex-col gap-2">
                      <label className="text-sm text-gray-600">{region}:</label>
                      <input
                        type="text"
                        className="border p-2"
                        onChange={(e) =>
                          handleInputChange("ctvAppTechnicalInfo", "trafficRegions", {
                            ...formData.ctvAppTechnicalInfo.trafficRegions,
                            inApp: {
                              ...formData.ctvAppTechnicalInfo.trafficRegions?.inApp,
                              [region.toLowerCase().replace(' ', '')]: e.target.value
                            }
                          })
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* CTV Traffic */}
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-medium text-gray-600">CTV</label>
                  {["North America", "EMEA", "APAC", "LATAM"].map((region) => (
                    <div key={region} className="flex flex-col gap-2">
                      <label className="text-sm text-gray-600">{region}:</label>
                      <input
                        type="text"
                        className="border p-2"
                        onChange={(e) =>
                          handleInputChange("ctvAppTechnicalInfo", "trafficRegions", {
                            ...formData.ctvAppTechnicalInfo.trafficRegions,
                            ctv: {
                              ...formData.ctvAppTechnicalInfo.trafficRegions?.ctv,
                              [region.toLowerCase().replace(' ', '')]: e.target.value
                            }
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Centers */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">5.f.</span>
                <span className="question-text"> Please outline where your Data Centres are located:</span>
              </label>
              <div className="checkbox-group">
                {["US", "EU", "APAC"].map((location) => (
                  <div key={location}>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={location}
                        onChange={(e) =>
                          handleInputChange("ctvAppTechnicalInfo", "dataCenters", {
                            ...formData.ctvAppTechnicalInfo.dataCenters,
                            [e.target.value]: e.target.checked,
                          })
                        }
                      />
                      {location}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Availability and Sensitive Categories */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">5.h.</span>
                <span className="question-text"> Do you make any first/third party data available to buyers/advertisers wanting to create PMPs?</span>
              </label>
              <textarea
                className="border p-2 w-full mb-8"
                onChange={(e) =>
                  handleInputChange("ctvAppTechnicalInfo", "pmpData", e.target.value)
                }
              />

              <label className="block font-medium mb-6">Please select all sensitive categories your supply is eligible for:</label>
              <div className="checkbox-group">
                {["Pharma", "Gambling", "LDA Advertisers", "Political"].map((category) => (
                  <div key={category}>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={category}
                        onChange={(e) =>
                          handleInputChange("ctvAppTechnicalInfo", "sensitiveCategories", {
                            ...formData.ctvAppTechnicalInfo.sensitiveCategories,
                            [e.target.value]: e.target.checked,
                          })
                        }
                      />
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 6: Technical Settings */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Section 6: Technical Settings</h3>

            {/* Impression Tracking Methods */}
            <div className="mb-12">
              <label className="block font-medium mb-6">Supported Impression Tracking Method(s)</label>
              <div className="checkbox-group">
                {["ADM", "BURL", "nURL (least preferred)"].map((method) => (
                  <div key={method}>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={method}
                        onChange={(e) =>
                          handleInputChange("ctvAppTechnicalInfo", "impressionTracking", {
                            ...formData.ctvAppTechnicalInfo.impressionTracking,
                            [e.target.value]: e.target.checked,
                          })
                        }
                      />
                      {method}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile APP BURL Timing */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">6.b.</span>
                <span className="question-text"> (Specific to Mobile APP) - When is the BURL fired?</span>
              </label>
              <div className="checkbox-group">
                {[
                  "When the Ad renders",
                  "When the impression is measured viewable"
                ].map((option) => (
                  <div key={option}>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={option}
                        onChange={(e) =>
                          handleInputChange("ctvAppTechnicalInfo", "burlTiming", {
                            ...formData.ctvAppTechnicalInfo.burlTiming,
                            [e.target.value]: e.target.checked,
                          })
                        }
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions 6.c through 6.h */}
            {[
              {
                ref: "6.c",
                question: "(Specific to Mobile APP) - Do you track Interstitial ads any differently? If so please explain how is the tracking done)",
                field: "interstitialTracking"
              },
              {
                ref: "6.d",
                question: "Do you have any other relevant information in regards to Impression Tracking that you would like to disclose?",
                field: "additionalTrackingInfo"
              }
            ].map((item) => (
              <div key={item.ref} className="mb-12">
                <label className="block font-medium mb-6">
                  <span className="question-ref">{item.ref}</span>
                  <span className="question-text"> {item.question}</span>
                </label>
                <textarea
                  className="border p-2 w-full"
                  onChange={(e) =>
                    handleInputChange("ctvAppTechnicalInfo", item.field, e.target.value)
                  }
                />
              </div>
            ))}

            {/* Networking and Servers */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">6.e.</span>
                <span className="question-text"> Networking and Servers</span>
              </label>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600">3PID support? (Please list all that you support):</label>
                  <textarea
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("ctvAppTechnicalInfo", "threePidSupport", e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600">SKAdNetwork Support?</label>
                  <input
                    type="text"
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("ctvAppTechnicalInfo", "skadSupport", e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600">(CTV only) Do you support Ad Pods?</label>
                  <select
                    className="border p-2"
                    onChange={(e) =>
                      handleInputChange("ctvAppTechnicalInfo", "adPodsSupport", e.target.value)
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Ad Quality */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">6.f.</span>
                <span className="question-text"> Are you currently integrated with a third-party Quality Vendor (i.e. HUMAN, MOAT, IAS, DoubleVerify, Pixalate)?</span>
              </label>
              <textarea
                className="border p-2 w-full"
                onChange={(e) =>
                  handleInputChange("ctvAppTechnicalInfo", "qualityVendors", e.target.value)
                }
              />
            </div>

            {/* oRTB Requirements */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">6.g.</span>
                <span className="question-text"> oRTB Requirements</span>
              </label>
              <div className="space-y-4">
                {[
                  "Do you support sending Multi-impression Object Bid Requests?",
                  "Do you support Multi-format requests?",
                  "Do you support Multi-bid / Multi-seat responses?",
                  "Do you support sending demographic, viewability, click through, etc.. data in the bid request?",
                  "(CTV Only) Do you pass content object information?",
                  "What are your Impression Expiry Windows (in minutes)?",
                  "Do you enforce a maximum timeout threshold? (TMAX)"
                ].map((question, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <label className="text-sm text-gray-600">{question}</label>
                    <input
                      type="text"
                      className="border p-2"
                      onChange={(e) =>
                        handleInputChange("ctvAppTechnicalInfo", `ortbRequirement${index + 1}`, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Inventory Management */}
            <div className="mb-12">
              <label className="block font-medium mb-6">
                <span className="question-ref">6.h.</span>
                <span className="question-text"> Inventory Management</span>
              </label>
              <div className="space-y-4">
                {[
                  "Do you require breaking out your inventory for mapping purposes?",
                  "If you do need support with mapping, please outline the level of granularity needed. e.g. having a CTV/APP split",
                  "Do you have a revenue caps in place?"
                ].map((question, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <label className="text-sm text-gray-600">{question}</label>
                    <textarea
                      className="border p-2"
                      onChange={(e) =>
                        handleInputChange("ctvAppTechnicalInfo", `inventoryManagement${index + 1}`, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <button
        className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default OnboardingForm;
