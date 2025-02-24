import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaQuestionCircle } from "react-icons/fa";
import logo from './logo.svg';  // Adjust the path to where your logo is stored

// First, let's add a consistent style for all text inputs and textareas
const inputStyles = "border-b border-gray-300 p-2 mb-4 focus:border-yellow-400 focus:outline-none transition-colors placeholder-gray-400";
const textareaStyles = "w-full border-b border-gray-300 p-2 mb-4 min-h-[100px] focus:border-yellow-400 focus:outline-none transition-colors placeholder-gray-400 resize-none";
const selectStyles = "w-full border-b border-gray-300 p-2 mb-4 focus:border-yellow-400 focus:outline-none transition-colors";

// Then update all regular inputs to include w-full
const standardInputClass = `${inputStyles} w-full`;

// And update the traffic region inputs to use w-1/16
const trafficInputClass = `${inputStyles} w-1/16`;

const OnboardingForm = () => {
  const [formData, setFormData] = useState(() => {
    // Try to load saved data from localStorage on initial render
    const savedData = localStorage.getItem('sovrnFormData');
    return savedData ? JSON.parse(savedData) : {
      genericInventoryMix: {},
      webTechnicalInfo: {
        integrationMethods: [],
        preferredIntegration: "",
        videoPlayers: "",
        pricingStrategy: "",
        pricingVendor: "",
        floorIntegration: "",
        sovrnOptimization: "",
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
        dataCenters: [],
        dataAvailability: "",
        sensitiveCategories: [],
        impressionTracking: {},
        videoTrackingSupport: "",
        impressionPixelEvent: "",
        impressionPixelSide: "",
        impressionPixelTiming: "",
        bidCaching: "",
        tmaxControl: "",
        expiryTime: "",
      },
      ctvAppTechnicalInfo: {},
      sellerInfo: {},
    };
  });

  // Add custom tab styles
  const tabStyles = {
    selected: 'bg-yellow-400/70 text-black rounded-lg',
    base: 'flex-1 py-4 px-4 text-center cursor-pointer hover:ring-2 hover:ring-yellow-400 focus:outline-none transition-all rounded-lg'
  };

  // Add calculateProgress function
  const calculateProgress = () => {
    const sections = {
      genericInventoryMix: [
        'environments',
        'adFormats',
        'ownershipType',
        'sellerCategoryOO',
        'sellerCategoryIntermediary',
        'coppaInventory',
        'appStores'
      ],
      webTechnicalInfo: [
        'integrationMethods',
        'preferredIntegration',
        'videoPlayerType',
        'videoPlayerDetails',
        'pricingStrategy',
        'requestVolume',
        'trafficRegions',
        'dataCenters',
        'dataAvailability',
        'sensitiveCategories'
      ],
      sellerInfo: [
        'businessName',
        'businessDomain',
        'hasSellersJson',
        'handlesPayment',
        'supportsSupplyChain',
        'directInventoryProportion',
        'hasSegmentationCapability'
      ]
    };

    let totalFields = 0;
    let filledFields = 0;

    Object.keys(sections).forEach(section => {
      sections[section].forEach(field => {
        totalFields++;
        const value = formData[section][field];
        if (value) {
          if (typeof value === 'object') {
            // For objects and arrays, check if they have any values
            if (Array.isArray(value)) {
              if (value.length > 0) filledFields++;
            } else if (Object.keys(value).length > 0) {
              filledFields++;
            }
          } else if (value.toString().trim() !== '') {
            filledFields++;
          }
        }
      });
    });

    return Math.round((filledFields / totalFields) * 100);
  };

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

  // Add saveForLater function
  const saveForLater = () => {
    localStorage.setItem('sovrnFormData', JSON.stringify(formData));
    alert('Your progress has been saved. You can return to complete the form later.');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <div className="sticky top-0 bg-white z-10 shadow-md">
              <div className="flex flex-col items-center bg-white p-4">
                <h1 className="text-2xl font-bold mb-4">Sovrn Tech Form</h1>
                <div className="w-full max-w-2xl bg-white mb-4">
                  <div className="flex justify-between items-center mb-2 bg-white">
                    <span className="text-sm font-medium text-yellow-400">Progress</span>
                    <span className="text-sm font-medium text-yellow-400">{calculateProgress()}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 transition-all duration-500 ease-out"
                      style={{ width: `${calculateProgress()}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-8">
              <Tabs defaultIndex={0} selectedTabClassName={tabStyles.selected}>
                <div className="sticky top-0 bg-white z-10">
                  <TabList className="flex">
                    <Tab className={tabStyles.base}>Generic Inventory Mix</Tab>
                    <Tab className={tabStyles.base}>WEB - Technical Info</Tab>
                    <Tab className={tabStyles.base}>CTVAPP - Technical Info</Tab>
                  </TabList>
                </div>

                {/* Generic Inventory Mix Tab */}
                <TabPanel>
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-6">Generic Inventory Mix</h2>
                    
                    {/* Question 1.a */}
                    <div className="mb-6">
                      <label className="block font-medium">
                        <span className="question-ref">1.a.</span>
                        <span className="question-text"> Please select all Environments in which you operate:</span>
                      </label>
                      <div className="mt-1">
                        <div className="checkbox-group">
                          {[
                            "Mobile In-App",
                            "Desktop In-App",
                            "CTV/OTT",
                            "WEB",
                            "OOH"
                          ].map((env) => (
                            <div key={env}>
                              <label className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  className="mr-2"
                                  value={env}
                                  onChange={(e) =>
                                    handleInputChange("genericInventoryMix", "environments", {
                                      ...formData.genericInventoryMix.environments,
                                      [e.target.value]: e.target.checked,
                                    })
                                  }
                                />
                                {env}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Question 1.b */}
                    <div className="mb-6">
                      <label className="block font-medium">
                        <span className="question-ref">1.b.</span>
                        <span className="question-text"> What formats of advertising do you support in these environments?</span>
                      </label>
                      <div className="mt-1">
                        <div className="checkbox-group">
                          {[
                            "Display",
                            "Video",
                            "Interstitial - WEB",
                            "Interstitial - APP",
                            "Native - WEB",
                            "Native - APP"
                          ].map((format) => (
                            <div key={format}>
                              <label className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  className="mr-2"
                                  value={format}
                                  onChange={(e) =>
                                    handleInputChange("genericInventoryMix", "adFormats", {
                                      ...formData.genericInventoryMix.adFormats,
                                      [e.target.value]: e.target.checked,
                                    })
                                  }
                                />
                                {format}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Question 1.c */}
                    <div className="mb-6">
                      <label className="block font-medium">
                        <span className="question-ref">1.c.</span>
                        <span className="question-text"> Do you own and operate (O&O) the inventory (or manufacture a device) that you intend to monetize through Sovrn? OR act as an intermediary that handles or facilitates monetization on the owner's behalf? (If you work in both capacities, please select Both in the dropdown):</span>
                      </label>
                      <div className="mt-1">
                        <div className="flex flex-col gap-2">
                          <select
                            className={selectStyles}
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
                                className={selectStyles}
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
                    </div>

                    {/* Question 1.d */}
                    <div className="mb-6">
                      <label className="block font-medium">
                        <span className="question-ref">1.d.</span>
                        <span className="question-text"> Which category of seller best suits your offering? (Please select all that apply):</span>
                      </label>
                      
                      <div className="mt-1">
                        <div className="flex flex-col gap-2">
                          {/* Owned & Operated Category */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-lg font-medium text-gray-800 mb-2">Owned & Operated</h4>
                            <div className="mt-1 space-y-1">
                              {[
                                "Publisher",
                                "Device Manufacturer",
                                "App Developer",
                                "MVPD"
                              ].map((category) => (
                                <div key={category}>
                                  <label className="inline-flex items-center">
                                    <input
                                      type="checkbox"
                                      className="mr-2"
                                      value={category}
                                      onChange={(e) =>
                                        handleInputChange("genericInventoryMix", "sellerCategoryOO", {
                                          ...formData.genericInventoryMix.sellerCategoryOO,
                                          [e.target.value]: e.target.checked,
                                        })
                                      }
                                    />
                                    {category === "MVPD" ? "MVPD (Multichannel Video Programming Distributor) or FAST Platform" : category}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Intermediary Category */}
                          <div className="bg-gray-50 p-4 rounded-lg mt-4">
                            <h4 className="text-lg font-medium text-gray-800 mb-2">Intermediary</h4>
                            <div className="mt-1 space-y-1">
                              {[
                                ["SSP", "Supply Side Platform (SSP)"],
                                ["Technology Solution", "Technology Solution (ex. Server Side Ad-Insertion, Ad Server, etc.)"],
                                ["Ad Network", "Ad Network"],
                                ["Supplemental Content", "Supplemental Content Solution or Syndication Partner"],
                                ["Data Vendor", "Data/Audience Enrichment Vendor"]
                              ].map(([value, label]) => (
                                <div key={value}>
                                  <label className="inline-flex items-center">
                                    <input
                                      type="checkbox"
                                      className="mr-2"
                                      value={value}
                                      onChange={(e) =>
                                        handleInputChange("genericInventoryMix", "sellerCategoryIntermediary", {
                                          ...formData.genericInventoryMix.sellerCategoryIntermediary,
                                          [e.target.value]: e.target.checked,
                                        })
                                      }
                                    />
                                    {label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Question 1.e */}
                    <div className="mb-6">
                      <label className="block font-medium">
                        <span className="question-ref">1.e.</span>
                        <span className="question-text">
                          What portion of your inventory, if any, is child directed/subject to COPPA regulation per the FTC (Federal Trade Commission)?
                        </span>
                      </label>
                      <div className="mt-1">
                        <div className="flex flex-col gap-2">
                          <select
                            className={selectStyles}
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
                    </div>

                    {/* Question 1.f */}
                    <div className="mb-6">
                      <label className="block font-medium">
                        <span className="question-ref">1.f.</span>
                        <span className="question-text">
                          (APP Specific Question) On what AppStores can your applications be found? (Please select all that apply):
                        </span>
                      </label>
                      <div className="mt-1">
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
                          <div className="mt-1">
                            <label className="block font-medium mb-2">Other (Please list other providers):</label>
                            <div className="ml-0">
                              <input
                                type="text"
                                className={standardInputClass}
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
                  </div>
                </TabPanel>

                {/* WEB Technical Info Tab */}
                <TabPanel>
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">WEB - Technical Info</h2>
                    
                    {/* Integration Methods */}
                    <div className="mb-4">
                      <label className="block font-medium">
                        <span className="question-ref">1.a.</span>
                        <span className="question-text"> Please Select All Available Integration Methods:</span>
                      </label>
                      <div className="mt-1">
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
                                    className={standardInputClass}
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
                    </div>

                    {/* Preferred Integration Method */}
                    <div className="mb-4">
                      <label className="block font-medium">
                        <span className="question-ref">1.b.</span>
                        <span className="question-text"> Please select your preferred Integration Method:</span>
                      </label>
                      <div className="mt-1">
                        <div className="flex flex-col gap-2">
                          <select
                            className={selectStyles}
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
                    </div>

                    {/* Video Player Question */}
                    <div className="mb-4">
                      <label className="block font-medium">
                        <span className="question-ref">1.c.</span>
                        <span className="question-text"> Which Video Player are you using?</span>
                      </label>
                      <div className="mt-1">
                        <select
                          className={selectStyles}
                          onChange={(e) =>
                            handleInputChange("webTechnicalInfo", "videoPlayerType", e.target.value)
                          }
                        >
                          <option value="">Select a video player</option>
                          <option value="JW Player">JW Player</option>
                          <option value="Video.js">Video.js</option>
                          <option value="Brightcove">Brightcove</option>
                          <option value="Kaltura">Kaltura</option>
                          <option value="Flowplayer">Flowplayer</option>
                          <option value="Custom">Custom Player</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Request Volume */}
                    <div className="mb-4">
                      <label className="block font-medium">
                        <span className="question-ref">1.d.</span>
                        <span className="question-text"> Total Request Volume - Please specify if daily or monthly:</span>
                      </label>
                      <div className="mt-1">
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-600">Display:</label>
                            <input
                              type="text"
                              className={standardInputClass}
                              placeholder="Your answer"
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
                              className={standardInputClass}
                              placeholder="Your answer"
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
                    </div>

                    {/* Section 2: oRTB Technical Questions */}
                    <h3 className="text-xl font-semibold mb-4">Section 2: oRTB Technical Questions</h3>

                    {/* Impression Tracking Method */}
                    <div className="mb-4">
                      <label className="block font-medium">
                        <span className="question-ref">2.a.</span>
                        <span className="question-text"> Supported Impression Tracking Method:</span>
                      </label>
                      <div className="mt-1">
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
                    </div>

                    {/* Video Specific Tracking */}
                    <div className="mb-4">
                      <label className="block font-medium">
                        <span className="question-ref">2.b.</span>
                        <span className="question-text"> Video Specific - do you support impression tracking by the VAST impression event or nURL/bURL?</span>
                      </label>
                      <div className="mt-1">
                        <textarea
                          className={textareaStyles}
                          placeholder="Your answer"
                          onChange={(e) =>
                            handleInputChange("webTechnicalInfo", "videoTrackingSupport", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    {/* Ad-call Flow & Creative Rendering */}
                    <h3 className="text-xl font-semibold mb-4">Ad-call Flow & Creative Rendering</h3>

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
                      <div key={item.ref} className="mb-4">
                        <label className="block font-medium">
                          <span className="question-ref">{item.ref}</span>
                          <span className="question-text"> {item.question}</span>
                        </label>
                        <div className="mt-1">
                          <textarea
                            className={textareaStyles}
                            placeholder="Your answer"
                            onChange={(e) =>
                              handleInputChange("webTechnicalInfo", item.field, e.target.value)
                            }
                          />
                        </div>
                      </div>
                    ))}

                    {/* Ad Quality */}
                    <h3 className="text-xl font-semibold mb-4">Ad Quality</h3>

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
                      <div key={item.ref} className="mb-4">
                        <label className="block font-medium">
                          <span className="question-ref">{item.ref}</span>
                          <span className="question-text"> {item.question}</span>
                        </label>
                        <div className="mt-1">
                          <textarea
                            className={textareaStyles}
                            placeholder="Your answer"
                            onChange={(e) =>
                              handleInputChange("webTechnicalInfo", item.field, e.target.value)
                            }
                          />
                        </div>
                      </div>
                    ))}

                    {/* Reporting */}
                    <h3 className="text-xl font-semibold mb-4">Reporting</h3>

                    <div className="mb-4">
                      <label className="block font-medium">
                        <span className="question-ref">2.m.</span>
                        <span className="question-text"> Are you able to provide daily reports in UTC time zone by email? (impressions, Revenue)</span>
                      </label>
                      <div className="mt-1">
                        <div className="flex flex-col gap-2">
                          <select
                            className={selectStyles}
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
                    </div>

                    {/* oRTB Requirements */}
                    <h3 className="text-xl font-semibold mb-4">oRTB Requirements</h3>

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
                      <div key={index} className="mb-4">
                        <label className="block font-medium">
                          <span className="question-text">{item.question}</span>
                        </label>
                        <div className="mt-1">
                          <textarea
                            className={textareaStyles}
                            placeholder="Your answer"
                            onChange={(e) =>
                              handleInputChange("webTechnicalInfo", item.field, e.target.value)
                            }
                          />
                        </div>
                      </div>
                    ))}

                    {/* Cookie Matching Section */}
                    <h4 className="text-lg font-medium mb-4">Cookie Matching</h4>

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
                      <div key={index} className="mb-4">
                        <label className="block font-medium">
                          <span className="question-text">{item.question}</span>
                        </label>
                        <div className="mt-1">
                          <textarea
                            className={textareaStyles}
                            placeholder="Your answer"
                            onChange={(e) =>
                              handleInputChange("webTechnicalInfo", item.field, e.target.value)
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>

                {/* CTVAPP Technical Info Tab */}
                <TabPanel>
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-6">CTV/APP Technical Info</h2>
                    
                    {/* Section 5: Technical Info */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Section 5: Technical Info</h3>

                      {/* Question 5.a */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">5.a.</span>
                          <span className="question-text"> Please Select All Available Integration Methods:</span>
                        </label>
                        <div className="mt-1">
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
                                      className={standardInputClass}
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
                      </div>

                      {/* Question 5.b */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">5.b.</span>
                          <span className="question-text"> Please select your preferred Integration Method:</span>
                        </label>
                        <div className="mt-1">
                          <div className="flex flex-col gap-2">
                            <select
                              className={selectStyles}
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
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Request Volume */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-text">Total Request Volume (Please specify if daily or monthly):</span>
                        </label>
                        <div className="mt-1">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">Total CTV Request Volume (if applicable):</label>
                              <input
                                type="text"
                                className={standardInputClass}
                                onChange={(e) =>
                                  handleInputChange("ctvAppTechnicalInfo", "requestVolume", {
                                    ...formData.ctvAppTechnicalInfo.requestVolume,
                                    ctv: e.target.value
                                  })
                                }
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">Total In-App Request Volume (if applicable):</label>
                              <input
                                type="text"
                                className={standardInputClass}
                                onChange={(e) =>
                                  handleInputChange("ctvAppTechnicalInfo", "requestVolume", {
                                    ...formData.ctvAppTechnicalInfo.requestVolume,
                                    inApp: e.target.value
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Question 5.e - Traffic Regions */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">5.e.</span>
                          <span className="question-text"> Percentage of available traffic in the following regions:</span>
                        </label>
                        <div className="mt-1">
                          <div className="space-y-8">
                            {/* In-APP Traffic */}
                            <div className="flex flex-col gap-4">
                              <label className="text-sm font-medium text-gray-600">In-APP</label>
                              {["North America", "EMEA", "APAC", "LATAM"].map((region) => (
                                <div key={region} className="flex flex-col gap-2">
                                  <label className="text-sm text-gray-600">{region}:</label>
                                  <input
                                    type="text"
                                    className={trafficInputClass}
                                    placeholder="Your answer"
                                    onChange={(e) =>
                                      handleInputChange("ctvAppTechnicalInfo", "trafficRegions", {
                                        ...formData.ctvAppTechnicalInfo.trafficRegions,
                                        inApp: {
                                          ...formData.ctvAppTechnicalInfo.trafficRegions.inApp,
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
                                    className={trafficInputClass}
                                    placeholder="Your answer"
                                    onChange={(e) =>
                                      handleInputChange("ctvAppTechnicalInfo", "trafficRegions", {
                                        ...formData.ctvAppTechnicalInfo.trafficRegions,
                                        ctv: {
                                          ...formData.ctvAppTechnicalInfo.trafficRegions.ctv,
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
                      </div>

                      {/* Question 5.f - Data Centers */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">5.f.</span>
                          <span className="question-text"> Please outline where your Data Centres are located:</span>
                        </label>
                        <div className="mt-1">
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
                      </div>

                      {/* Question 5.h - Data and Categories */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">5.h.</span>
                          <span className="question-text"> Do you make any first/third party data available to buyers/advertisers wanting to create PMPs?</span>
                        </label>
                        <div className="mt-1">
                          <textarea
                            className={textareaStyles}
                            placeholder="Your answer"
                            onChange={(e) =>
                              handleInputChange("ctvAppTechnicalInfo", "pmpData", e.target.value)
                            }
                          />
                          
                          <label className="block font-medium mt-1">Please select all sensitive categories your supply is eligible for:</label>
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
                    </div>

                    {/* Section 6: Technical Settings */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Section 6: Technical Settings</h3>

                      {/* Impression Tracking Methods */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-text">Supported Impression Tracking Method(s):</span>
                        </label>
                        <div className="mt-1">
                          <div className="checkbox-group">
                            {[
                              "ADM",
                              "BURL",
                              "nURL (least preferred)"
                            ].map((method) => (
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
                      </div>

                      {/* Question 6.b - BURL Firing */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">6.b.</span>
                          <span className="question-text"> (Specific to Mobile APP) - When is the BURL fired?</span>
                        </label>
                        <div className="mt-1">
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
                                      handleInputChange("ctvAppTechnicalInfo", "burlFiring", {
                                        ...formData.ctvAppTechnicalInfo.burlFiring,
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
                        <div key={item.ref} className="mb-6">
                          <label className="block font-medium">
                            <span className="question-ref">{item.ref}</span>
                            <span className="question-text"> {item.question}</span>
                          </label>
                          <div className="mt-1">
                            <textarea
                              className={textareaStyles}
                              placeholder="Your answer"
                              onChange={(e) =>
                                handleInputChange("ctvAppTechnicalInfo", item.field, e.target.value)
                              }
                            />
                          </div>
                        </div>
                      ))}

                      {/* Question 6.e - Networking and Servers */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">6.e</span>
                          <span className="question-text"> Networking and Servers</span>
                        </label>
                        <div className="mt-1">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">3PID support? (Please list all that you support):</label>
                              <textarea
                                className={textareaStyles}
                                placeholder="Your answer"
                                onChange={(e) =>
                                  handleInputChange("ctvAppTechnicalInfo", "threePidSupport", e.target.value)
                                }
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">SKAdNetwork Support?</label>
                              <select
                                className={selectStyles}
                                onChange={(e) =>
                                  handleInputChange("ctvAppTechnicalInfo", "skadNetworkSupport", e.target.value)
                                }
                              >
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">(CTV only) Do you support Ad Pods?</label>
                              <select
                                className={selectStyles}
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
                      </div>

                      {/* Question 6.f - Ad Quality */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">6.f</span>
                          <span className="question-text"> Ad Quality</span>
                        </label>
                        <div className="mt-1">
                          <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-600">
                              Are you currently integrated with a third-party Quality Vendor (i.e. HUMAN, MOAT, IAS, DoubleVerify, Pixalate)?
                            </label>
                            <textarea
                              className={textareaStyles}
                              placeholder="Your answer"
                              onChange={(e) =>
                                handleInputChange("ctvAppTechnicalInfo", "qualityVendors", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Question 6.g - oRTB Requirements */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">6.g</span>
                          <span className="question-text"> oRTB Requirements</span>
                        </label>
                        <div className="mt-1">
                          <div className="flex flex-col gap-4">
                            {[
                              "Do you support sending Multi-impression Object Bid Requests?",
                              "Do you support Multi-format requests?",
                              "Do you support Multi-bid / Multi-seat responses?",
                              "Do you support sending demographic, viewability, click through, etc.. data in the bid request?",
                              "(CTV Only) Do you pass content object information?"
                            ].map((question) => (
                              <div key={question} className="flex flex-col gap-2">
                                <label className="text-sm text-gray-600">{question}</label>
                                <select
                                  className={selectStyles}
                                  onChange={(e) =>
                                    handleInputChange("ctvAppTechnicalInfo", "ortbRequirements", {
                                      ...formData.ctvAppTechnicalInfo.ortbRequirements,
                                      [question]: e.target.value
                                    })
                                  }
                                >
                                  <option value="">Select an option</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                            ))}
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">What are your Impression Expiry Windows (in minutes)?</label>
                              <input
                                type="text"
                                className={standardInputClass}
                                onChange={(e) =>
                                  handleInputChange("ctvAppTechnicalInfo", "impressionExpiryWindow", e.target.value)
                                }
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">Do you enforce a maximum timeout threshold? (TMAX)</label>
                              <input
                                type="text"
                                className={standardInputClass}
                                onChange={(e) =>
                                  handleInputChange("ctvAppTechnicalInfo", "tmaxThreshold", e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Question 6.h - Inventory Management */}
                      <div className="mb-6">
                        <label className="block font-medium">
                          <span className="question-ref">6.h</span>
                          <span className="question-text"> Inventory Management</span>
                        </label>
                        <div className="mt-1">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">Do you require breaking out your inventory for mapping purposes?</label>
                              <select
                                className={selectStyles}
                                onChange={(e) =>
                                  handleInputChange("ctvAppTechnicalInfo", "inventoryMapping", e.target.value)
                                }
                              >
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">
                                If you do need support with mapping, please outline the level of granularity needed. e.g. having a CTV/APP split
                              </label>
                              <textarea
                                className={textareaStyles}
                                placeholder="Your answer"
                                onChange={(e) =>
                                  handleInputChange("ctvAppTechnicalInfo", "mappingGranularity", e.target.value)
                                }
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-sm text-gray-600">Do you have a revenue caps in place?</label>
                              <select
                                className={selectStyles}
                                onChange={(e) =>
                                  handleInputChange("ctvAppTechnicalInfo", "revenueCaps", e.target.value)
                                }
                              >
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>

              <div className="flex justify-between items-center mt-8">
                <button
                  type="button"
                  onClick={saveForLater}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors font-bold"
                >
                  Save & Return Later
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
