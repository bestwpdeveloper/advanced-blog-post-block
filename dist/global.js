wp.hooks.addFilter("blocks.registerBlockType","bwdabpb/attribute/resMode",(function(t,e){return e.includes("bwdabpb/")&&(t.attributes={...t.attributes,resMode:{type:"string",default:"Desktop"}}),t}));